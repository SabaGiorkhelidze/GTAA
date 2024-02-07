export interface FileDetails {
  name: string;
  location: string | Blob; // This could be a URL or any other representation you need
  size: number;
}
