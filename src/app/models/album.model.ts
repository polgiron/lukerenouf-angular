export interface Image {
  id: number;
  title: string;
  description: string;
  width: number;
  height: number;
  bigUrl: string;
  thumbUrl: string;
  tags: string[];
}

export interface Album {
  id: number;
  title: string;
  description: string;
  images: Image[];
  cover: Image;
}
