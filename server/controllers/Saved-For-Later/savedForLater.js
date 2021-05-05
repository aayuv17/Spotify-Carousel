import { usersModel } from './../../models/users';
import { spotifyApi } from './../appAuth';
const empty = require('is-empty');

export const savedForLater = async(req, res) => {
    if (empty(spotifyApi.getAccessToken())){
        await spotifyApi
        .clientCredentialsGrant()
        .then((data) => {
          spotifyApi.setAccessToken(data.body['access_token']);
        })
        .catch((err) => {
            console.log(err);
        });
    }
    const query = await usersModel.findOne({
        username: req.params.username
    });
    const tracks = query.savedForLater;
    const promiseArray =[];
    for(var i=0; i<tracks.length; i++){
        promiseArray += 
            await spotifyApi
                .getTrack(tracks[i])
                .then((data) => {
                    return {
                        name: data.body.name,
                        artist: data.body.artists[0].name
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        var trackList = [];
        Promise
            .all(promiseArray)
            .then((values) => {
                trackList.push(values);
                res.status(200).send(trackList);
            })
            .catch((err) => {
                console.log(err);
            })
    }
}