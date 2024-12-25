import { createServerFn } from "@tanstack/start";

export const getProjectFn = createServerFn().handler(() => {
  return Promise.resolve({
    id: "1",
    name: "Real estate",
    companyName: "ACME Inc.",
    startDate: new Date(),
    deliverables: "website",
    expectedLaunchDate: new Date(),
    teamMembers: {
      role: {
        count: 1,
        members: [
          {
            id: "1",
            projectId: "1",
            role: "developer",
          },
        ],
      },
    },
  });
});
