import axios from '../axios';
import type { Track } from '../interfaces/track';

/**
 * @description Get Spotify catalog information for a single track identified by its unique Spotify ID.
 * @param trackId The Spotify ID for the track
 */
const getTrack = async (trackId: string): Promise<Track> => {
  const response = await axios.get<Track>(`/tracks/${trackId}`);
  return response.data;
};

/**
 * @description Get Spotify catalog information for multiple tracks based on their Spotify IDs.
 * @param trackIds Array of the Spotify IDs for the tracks. Maximum: 50 IDs.
 */
const getSeveralTracks = async (trackIds: string[]): Promise<Track[]> => {
  const response = await axios.get<{ tracks: Track[] }>('/tracks', {
    params: { ids: trackIds.join(',') },
  });
  return response.data.tracks;
};

export const tracksService = {
  getTrack,
  getSeveralTracks,
};
