const fs = require("fs");

const yaml = require('js-yaml');
const fetch = require('node-fetch');

API_KEY = "";
EVENT_ID = "FdP7ePMBrbLq9kZd4Hye";

async function callAPI() {
    const response = await fetch(`https://conference-hall.io/api/v1/event/${EVENT_ID}?key=${API_KEY}`);
    const data = await response.json();
    return data;
}

function getConfirmedTalks(talks) {
    return talks.filter(talk => talk.state === "confirmed");
}

function getSpeakers(speakers) {
    const speakersObj = speakers.reduce(
        (obj, item) => ({
            ...obj, [item['uid']]: item
        }), {});

    return speakersObj;
}

function createTalksFiles(confirmedTalks, speakers) {
    confirmedTalks.forEach(talk => {

        for (const speakerUid of talk.speakers) {
            if (speakerUid && speakers[speakerUid]) {
                speakers[speakerUid].selected = true;
            }
        }

        const template = `
---
uid: ${talk.id}
title: ${talk.title}
level: ${talk.level}
speakers: ${JSON.stringify(talk.speakers)}
language: ${talk.language}
---

${talk.abstract}
        `
        fs.writeFileSync(`../_sessions/${talk.id}.md`, template);
    });
}

async function downloadSpeakerImage(speaker) {
    await fetch(speaker.photoURL)
        .then(res =>
            res.body.pipe(fs.createWriteStream(`../images/speakers/${speaker.uid}.png`))
        )
}

function writeSpeakerFile(speakers) {

    const selectedSpeakers = []
    for (const speakerId in speakers) {
        const speaker = speakers[speakerId];
        if (speaker.selected) {
            selectedSpeakers.push({
                id: speaker.uid,
                display_name: speaker.displayName,
                image: `${speaker.uid}.png`,
                company: speaker.company,
                bio: speaker.bio
            });
            downloadSpeakerImage(speaker)
        }
    }
    const yml = yaml.dump(selectedSpeakers, {
        'styles': {
            '!!null': 'canonical' // dump null as ~
        }       // sort object keys
    });
    fs.writeFileSync(`../_data/speakers.yml`, yml);
    console.log(yml);
}

async function main() {
    const data = await callAPI();
    const speakers = getSpeakers(data.speakers);
    const confirmedTalks = getConfirmedTalks(data.talks);
    createTalksFiles(confirmedTalks, speakers);

    writeSpeakerFile(speakers);
}

main();