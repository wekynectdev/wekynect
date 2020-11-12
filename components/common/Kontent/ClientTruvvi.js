import {
  selectedProjectCookieName,
  defaultProjectId,
} from "./Utilities/SelectedProject";

// kentico kontent
import { DeliveryClient, TypeResolver } from "@kentico/kontent-delivery";

// models

import { HostedVideo } from "./Models/hosted_video";
import { Button } from "./Models/Button";

// environment variables
const projectId = process.env.REACT_APP_CONTENT_KONTICO_PROJECT_IDTRUVVI || "";
const previewApiKey = process.env.REACT_APP_CONTENT_KONTICO_PREVIEWAPIKEY || "";

// configure type resolvers
let typeResolvers = [
  new TypeResolver("Button", () => new Button()),
  new TypeResolver("hosted_video", () => new HostedVideo()),
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
