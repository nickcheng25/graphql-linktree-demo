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

export type Query = {
    __typename?: 'Query';
    regularLinks: Array<Maybe<RegularLink>>;
    regularLink: RegularLink;
    musicLinks: Array<Maybe<MusicLink>>;
    musicLink: MusicLink;
    allLinks: Array<Maybe<LinkSearch>>;
    allLinksByUserId: Array<Maybe<LinkSearch>>;
    showLinks?: Maybe<ShowLinks>;
};


export type QueryRegularLinkArgs = {
    id: Scalars['ID'];
};


export type QueryMusicLinkArgs = {
    id: Scalars['ID'];
};


export type QueryAllLinksByUserIdArgs = {
    userId: Scalars['String'];
};


export type QueryShowLinksArgs = {
    id: Scalars['ID'];
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
    id: Scalars['ID'];
    link: Scalars['String'];
};


export type MutationCreateMusicLinkArgs = {
    input: MusicLinkInput;
};


export type MutationUpdateMusicLinkArgs = {
    id: Scalars['ID'];
    link: Scalars['String'];
};


export type MutationCreateShowLinkArgs = {
    input: ShowLinkInput;
};


export type MutationUpdateShowLinkArgs = {
    id: Scalars['ID'];
    link: Scalars['String'];
};

export type MusicLink = Link & {
    __typename?: 'MusicLink';
    id: Scalars['ID'];
    title: Scalars['String'];
    link: Scalars['String'];
    userId: Scalars['String'];
    dateCreated: Scalars['DateTime'];
    platformPartners?: Maybe<Array<PlatformPartner>>;
};

export type PlatformPartner = {
    __typename?: 'PlatformPartner';
    platformLink: Scalars['String'];
    embeddedAudio?: Maybe<Scalars['String']>;
};

export type MusicLinkInput = {
    title: Scalars['String'];
    link: Scalars['String'];
    userId: Scalars['String'];
    platformPartners?: InputMaybe<Array<InputMaybe<PlatformPartnerInput>>>;
};

export type PlatformPartnerInput = {
    platformLink: Scalars['String'];
    embeddedAudio?: InputMaybe<Scalars['String']>;
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

export type Link = {
    title: Scalars['String'];
    link: Scalars['String'];
    userId: Scalars['String'];
    dateCreated: Scalars['DateTime'];
};

export type Music = {
    title: Scalars['String'];
    link: Scalars['String'];
    userId: Scalars['String'];
    dateCreated: Scalars['DateTime'];
    platformPartners?: Maybe<Array<PlatformPartner>>;
};

export type LinkSearch = RegularLink | MusicLink;

export type ShowLinks = {
    title: Scalars['String'];
    link: Scalars['String'];
    userId: Scalars['String'];
    dateCreated: Scalars['DateTime'];
    shows: Array<Show>;
};

export type ShowLink = ShowLinks & {
    __typename?: 'ShowLink';
    title: Scalars['String'];
    link: Scalars['String'];
    userId: Scalars['String'];
    dateCreated: Scalars['DateTime'];
    shows: Array<Show>;
};

export type ShowLinkInput = {
    title?: InputMaybe<Scalars['String']>;
    link: Scalars['String'];
    userId: Scalars['String'];
    shows: Array<Show>;
};

export type Show = {
    __typename?: 'Show';
    status: Status;
    saleLink: Scalars['String'];
};

export enum Status {
    SoldOut = 'SOLD_OUT',
    NotYetOnSale = 'NOT_YET_ON_SALE',
    OnSale = 'ON_SALE'
}
