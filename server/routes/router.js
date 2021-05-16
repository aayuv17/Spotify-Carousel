const express = require('express');
const passport = require('passport');

export const router = express.Router();

async function checkAuthentication(req, res, next) {
	if (req.body.username != req.user) {
		res.status(200).send({ message: 'Unauthorized User. Please login first.' });
	}
	if (req.isAuthenticated()) {
		console.log('Authenticated');
		req.user = res.locals.user;
		next();
	} else {
		console.log('Unauthenticated User');
		res.status(200).send({
			message: 'Unauthorized User. Please login first.',
		});
	}
}

import { fetchData } from './../controllers/Admin/scraper';
import { setImages } from './../controllers/Admin/setImages';
import { getRecommendations } from './../controllers/Admin/getRecommendations';
import { carousel } from './../controllers/Carousel/carousel';
import { modal } from './../controllers/Modal/modal';
//import { createUser } from './../controllers/User-Auth/createNewUser';
import { saveTrack } from './../controllers/Modal/saveTrack';
import { wallOfMusic } from './../controllers/Wall-Of-Music/wallOfMusic';
import { savePlaylist } from './../controllers/Carousel/savePlaylist';
import { playlistSaveStatus } from './../controllers/Carousel/playlistSaveStatus';
import { removeFromSavedPlaylists } from './../controllers/Saved-Playlists/removeFromSavedPlaylists';
import { setPlaylistSaveStatus } from './../controllers/Carousel/setPlaylistSaveStatus';
import { removeSavedTrack } from './../controllers/Wall-Of-Music/removeSavedTrack';
import { savedPlaylists } from './../controllers/Saved-Playlists/savedPlaylists';
import { displayRecommendedTracks } from './../controllers/Get-Recommendations.js/displayRecommendedTracks';
import { recommendTrack } from './../controllers/Modal/recommendTrack';
import { userSpotifyAuth } from './../controllers/userSpotifyAuth';
import { spotifyAuthUser } from './../controllers/userSpotifyAuth';
import { isAuthenticatedWithSpotify } from './../controllers/userSpotifyAuth';
import { addToLibrary } from './../controllers/userSpotifyAuth';
import { addTrackToPlaylist } from './../controllers/userSpotifyAuth';
import { explicitStatus } from './../controllers/explicit';
import { login } from './../controllers/login';
import { signUp } from './../controllers/signUp';
import { auth } from './../controllers/auth';
import { getTrackStatus } from './../controllers/Modal/getTrackStatus';
import { explicitCheck } from './../controllers/explicitCheck';

router.route('/checkAuthentication').get(checkAuthentication);
router.route('/scraper').post(fetchData);
router.route('/setImages').get(setImages);
router.route('/admin/getRecommendations').get(getRecommendations);
router.route('/:username/carousel').get(carousel);
router.route('/:username/modal').post(modal);
router.route('/:username/saveTrack').post(saveTrack);
router.route('/:username/removeSavedTrack').post(removeSavedTrack);
router.route('/:username/wallOfMusic').get(wallOfMusic);
router.route('/:username/savePlaylist').post(savePlaylist);
router.route('/:username/playlistSaveStatus').post(playlistSaveStatus);
router.route('/:username/removeSavedPlaylist').post(removeFromSavedPlaylists);
router.route('/:username/setPlaylistSaveStatus').post(setPlaylistSaveStatus);
router.route('/:username/listSavedPlaylists').get(savedPlaylists);
router.route('/:username/getRecommendations').get(displayRecommendedTracks);
router.route('/:username/getSimilarTracks').post(recommendTrack);
router.route('/:username/authenticateWithSpotify').get(userSpotifyAuth);
router.route('/callback').get(spotifyAuthUser);
router
	.route('/:username/isAuthenticatedWithSpotify')
	.get(isAuthenticatedWithSpotify);
router.route('/:username/addToMyLibrary').get(addToLibrary);
router.route('/:username/addToUserPlaylist').post(addTrackToPlaylist);
router.route('/:username/explicit').post(explicitStatus);
router.route('/login').post(login);
router.route('/signUp').post(signUp);
router.route('/auth').post(passport.authenticate('local'), auth);
router.route('/:username/getTrackStatus').post(getTrackStatus);
router.route('/:username/explicitCheck').get(explicitCheck);
