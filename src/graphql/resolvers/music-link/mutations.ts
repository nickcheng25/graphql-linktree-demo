import { MutationCreateMusicLinkArgs, MutationUpdateMusicLinkArgs } from 'src/graphql/types/types';
import MusicLink from '../../../db/models/music-link';

const musicLinkMutations = {
    createMusicLink: async (_parent: any, { ...musicLink }: MutationCreateMusicLinkArgs) => {
        const dateCreated = new Date().toUTCString();
        const linkObject = {
            ...musicLink.input,
            dateCreated
        }
        const newLink = await MusicLink.create(linkObject);
        return newLink.save();
    },
    // @todo write update function, and return back object to render
    updateMusicLink: async (_parent: any, { ...musicLink }: MutationUpdateMusicLinkArgs) => { return },
};

export default musicLinkMutations;