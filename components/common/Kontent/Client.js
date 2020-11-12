import {
  selectedProjectCookieName,
  defaultProjectId,
} from "./Utilities/SelectedProject";

// kentico kontent
import { DeliveryClient, TypeResolver } from "@kentico/kontent-delivery";

// models
import { HostedMedia } from "./Models/hosted_media";
import { HostedVideo } from "./Models/hosted_video";
import { Button } from "./Models/Button";

// environment variables
const projectId = process.env.NEXT_PUBLIC_CONTENT_KONTICO_PROJECT_ID || "";
const previewApiKey =
  process.env.NEXT_PUBLIC_CONTENT_KONTICO_PREVIEWAPIKEY || "";

// configure type resolvers
let typeResolvers = [
  new TypeResolver("Button", () => new Button()),
  new TypeResolver("hosted_video", () => new HostedVideo()),
  new TypeResolver("hosted_media", () => new HostedMedia()),
];
let currentProjectId = projectId;

const isPreview = () => previewApiKey !== "";

let Client = new DeliveryClient({
  projectId: currentProjectId,
  typeResolvers: typeResolvers,
  previewApiKey: previewApiKey,
  enablePreviewMode: isPreview(),
});

const resetClient = (newProjectId) => {
  Client = new DeliveryClient({
    projectId: newProjectId,
    typeResolvers: typeResolvers,
    previewApiKey: previewApiKey,
    enablePreviewMode: isPreview(),
  });
};

export { Client, resetClient };
