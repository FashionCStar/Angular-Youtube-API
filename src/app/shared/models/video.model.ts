export class Video {
  items: {
    id?: String,
    snippet: {
      categoryId?: String,
      channelId?: String,
      channelTitle?: String,
      description?: String,
      liveBroadcastContent?: String,
      localized?: {
        title: String,
        description: String;
      },
      publishedAt?: Date,
      tags?: Array<string>,
      thumbnails: {
        default?: {
          url: String
        },
        high?: {
          url: String
        },
        maxres?: {
          url: String
        },
        medium?: {
          url: String
        },
        stantard?: {
          url: String
        }
      },
      title?: String
    };
  };
}
