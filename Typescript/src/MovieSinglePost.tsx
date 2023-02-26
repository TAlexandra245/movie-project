export default interface MovieProps {
    year?:string;
    title?:string;
    info: InfoProps;
}

interface InfoProps {
    directors?: Array<string>;
    release_date?: string;
    rating?: number;
    genres?: Array<string>;
    image_url?: string;
    plot?: string;
    rank?: number;
    running_time_secs?: number;
    actors: Array<string>;
}
