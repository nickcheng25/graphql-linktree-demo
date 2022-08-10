export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    DateTime: any;
};

export type LinkSearch = RegularLink | MusicLink | ShowLink;

export type QueryAllLinksInput = {
    userId: Scalars['String'];
};

export type Query = {
    __typename?: 'Query';
    regularLinks: Maybe<RegularLink>[];
    regularLink: RegularLink;
    musicLinks: Maybe<MusicLink>[];
    musicLink: MusicLink;
    showLinks: Maybe<ShowLink>[];
    showLink?: Maybe<ShowLink>;
    allLinks: Maybe<LinkSearch>[];
    allLinksByUserId: Maybe<LinkSearch>[];
};


export type QueryRegularLinksArgs = {
    limit?: InputMaybe<Scalars['Int']>;
};


export type QueryRegularLinkArgs = {
    id: Scalars['ID'];
};


export type QueryMusicLinksArgs = {
    limit?: InputMaybe<Scalars['Int']>;
};


export type QueryMusicLinkArgs = {
    id: Scalars['ID'];
};


export type QueryShowLinksArgs = {
    limit?: InputMaybe<Scalars['Int']>;
};


export type QueryShowLinkArgs = {
    id: Scalars['ID'];
};


export type QueryAllLinksArgs = {
    limit?: InputMaybe<Scalars['Int']>;
};


export type QueryAllLinksByUserIdArgs = {
    input: QueryAllLinksInput;
};

export type Mutation = {
    __typename?: 'Mutation';
    createRegularLink: RegularLink;
    updateRegularLink: RegularLink;
    createMusicLink: MusicLink;
    updateMusicLink: MusicLink;
    createShowLink: ShowLink;
    updateShowLink: ShowLink;
};


export type MutationCreateRegularLinkArgs = {
    input: RegularLinkInput;
};


export type MutationUpdateRegularLinkArgs = {
    input: UpdateRegularLinkInput;
};


export type MutationCreateMusicLinkArgs = {
    input: MusicLinkInput;
};


export type MutationUpdateMusicLinkArgs = {
    input: UpdateMusicLinkInput;
};


export type MutationCreateShowLinkArgs = {
    input: ShowLinkInput;
};


export type MutationUpdateShowLinkArgs = {
    input: UpdateShowLinkInput;
};

export type Music = {
    title: Scalars['String'];
    link: Scalars['String'];
    userId: Scalars['String'];
    dateCreated: Scalars['DateTime'];
    platformPartners?: Maybe<PlatformPartner[]>;
};

export type MusicLink = Music & {
    __typename?: 'MusicLink';
    id: Scalars['ID'];
    title: Scalars['String'];
    link: Scalars['String'];
    userId: Scalars['String'];
    dateCreated: Scalars['DateTime'];
    platformPartners?: Maybe<PlatformPartner[]>;
};

export type PlatformPartner = {
    __typename?: 'PlatformPartner';
    partner: Partner;
    embeddedAudio?: Maybe<Scalars['String']>;
};

export enum Partner {
    Spotify = 'SPOTIFY',
    Soundcloud = 'SOUNDCLOUD',
    Youtube = 'YOUTUBE'
}

export type MusicLinkInput = {
    title: Scalars['String'];
    link: Scalars['String'];
    userId: Scalars['String'];
    platformPartners?: InputMaybe<InputMaybe<PlatformPartnerInput>[]>;
};

export type UpdateMusicLinkInput = {
    id: Scalars['ID'];
    title?: InputMaybe<Scalars['String']>;
    link?: InputMaybe<Scalars['String']>;
    platformPartners?: InputMaybe<InputMaybe<PlatformPartnerInput>[]>;
};

export type PlatformPartnerInput = {
    partner: Partner;
    embeddedAudio?: InputMaybe<Scalars['String']>;
};

export type Link = {
    title: Scalars['String'];
    link: Scalars['String'];
    userId: Scalars['String'];
    dateCreated: Scalars['DateTime'];
};

export type RegularLink = Link & {
    __typename?: 'RegularLink';
    id: Scalars['ID'];
    title: Scalars['String'];
    link: Scalars['String'];
    userId: Scalars['String'];
    dateCreated: Scalars['DateTime'];
};

export type RegularLinkInput = {
    title?: InputMaybe<Scalars['String']>;
    link: Scalars['String'];
    userId: Scalars['String'];
};

export type UpdateRegularLinkInput = {
    id: Scalars['ID'];
    title?: InputMaybe<Scalars['String']>;
    link?: InputMaybe<Scalars['String']>;
};

export type ShowLinks = {
    title: Scalars['String'];
    link: Scalars['String'];
    userId: Scalars['String'];
    dateCreated: Scalars['DateTime'];
    shows: Show[];
};

export type ShowLink = ShowLinks & {
    __typename?: 'ShowLink';
    title: Scalars['String'];
    link: Scalars['String'];
    userId: Scalars['String'];
    dateCreated: Scalars['DateTime'];
    /** a show is an object containing its sale status, and a redirect link to the vendor */
    shows: Show[];
};

export type Show = {
    __typename?: 'Show';
    status: Status;
    saleLink: Scalars['String'];
};

export type ShowLinkInput = {
    title?: InputMaybe<Scalars['String']>;
    link: Scalars['String'];
    userId: Scalars['String'];
    shows: ShowInput[];
};

export type ShowInput = {
    status: Status;
    saleLink: Scalars['String'];
};

export enum Status {
    SoldOut = 'SOLD_OUT',
    NotYetOnSale = 'NOT_YET_ON_SALE',
    OnSale = 'ON_SALE'
}

export type UpdateShowLinkInput = {
    id: Scalars['ID'];
    title?: InputMaybe<Scalars['String']>;
    link?: InputMaybe<Scalars['String']>;
    shows?: InputMaybe<ShowInput[]>;
};
