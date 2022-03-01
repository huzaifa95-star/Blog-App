import client from '@sanity/client'
import imageUrlBuilder from "@sanity/image-url";

export default client(
    {
        projectId: 'upvao3vp',
        dataset: "production",
        useCdn: true,
        apiVersion: "2021-10-21",

    }
)
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);