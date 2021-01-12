import * as functions from 'firebase-functions';
const ytlTitle = require('get-youtube-title');


export const getTitle = functions.https.onRequest((request, response) => {
    ytlTitle(request.body.contentId, (err: any, title: string) => {
        if (err) {
            response.send({ error: 'could not get content name' });
        }
        else {
            response.send({ title });
        }
    })
})
