import { z } from "../../src";
import { fileStreamingEndpointsFactory } from "../factories";

export const streamAvatarEndpoint = fileStreamingEndpointsFactory.build({
  method: "get",
  shortDescription: "Streams a file content.",
  operationId: "streamAvatar",
  tags: ["users", "files"],
  input: z.object({
    userId: z
      .string()
      .regex(/\d+/)
      .transform((str) => parseInt(str, 10)),
  }),
  output: z.object({
    filename: z.string(),
  }),
  handler: async () => ({ filename: "logo.svg" }),
});
