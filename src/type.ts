import React, { ReactElement, SetStateAction } from "react";
export type Tproduct = {
  data: Thome;
  Refetch: (
    term: string,
    e?: React.MouseEvent<HTMLDivElement, MouseEvent> | undefined
  ) => Promise<void>;
};

export type Thome = {
  fetchedResources:
    | {
        id: string;
        title: string;
        desc: string;
        image: string;
        music: string;
        cat: string;
      }[]
    | string;

  isNavigationBarOpen: boolean;
};

export type Tfooter = {
  playIcon: boolean;
  musicIcon: boolean;
  profileIcon: boolean;
};

export type TLogin = {
  password: string;
  email: string;
  isValidated: boolean;
  passwordError: boolean;
  canLogIn: boolean | null;
  storeName: string;
};

export type TFormProps = {
  isNameVisible?: boolean;
  buttonContent: string;
  accountType: string;
};

export type Tsvg = {
  flower: () => ReactElement;
  navIcon: () => ReactElement;
  logo: () => ReactElement;
  calm: () => ReactElement;
  relax: () => ReactElement;
  focus: () => ReactElement;
  playIcon: () => ReactElement;
  darkLogo: () => ReactElement;
  darkMusic: () => ReactElement;
  profile: () => ReactElement;
  pause: () => ReactElement;
  wave: () => ReactElement;
  next: () => ReactElement;
  repeat: () => ReactElement;
  play: () => ReactElement;
};

export type Tcontext = {
  Item:
    | {
        id: string;
        title: string;
        desc: string;
        image: string;
        music: string;
      }[]
    | string;
  Refetch: (term: string, e?: React.MouseEvent<HTMLDivElement>) => void;
  play: () => void;
  pause: () => void;
  isPlaying: boolean;
  setisPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  stop: () => void;
};

export type Tforplay = {
  id: string;
  title: string;
  desc: string;
  image: string;
  music: string;
};

export type Tprops = {
  Datas?: {
    id: string;
    title: string;
    desc: string;
    image: string;
    cat: string;
  };
  index?: number;
};

export type TData = {
  artist: string;
  author: string;
  cat: string;
  desc: string;
  id: number;
  image: string;
  music: string;
  title: string;
};
