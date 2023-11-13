import { emptySplitApi as api } from "../emptyApi";

export const addTagTypes = ["projects"] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      projectsList: build.query<ProjectsListApiResponse, ProjectsListApiArg>({
        query: () => ({ url: `/projects/` }),
        providesTags: ["projects"],
      }),
      projectsCreate: build.mutation<
        ProjectsCreateApiResponse,
        ProjectsCreateApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/`,
          method: "POST",
          body: queryArg.project,
        }),
        invalidatesTags: ["projects"],
      }),
      projectsRead: build.query<ProjectsReadApiResponse, ProjectsReadApiArg>({
        query: (queryArg) => ({ url: `/projects/${queryArg.id}/` }),
        providesTags: ["projects"],
      }),
      projectsUpdate: build.mutation<
        ProjectsUpdateApiResponse,
        ProjectsUpdateApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/${queryArg.id}/`,
          method: "PUT",
          body: queryArg.project,
        }),
        invalidatesTags: ["projects"],
      }),
      projectsPartialUpdate: build.mutation<
        ProjectsPartialUpdateApiResponse,
        ProjectsPartialUpdateApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/${queryArg.id}/`,
          method: "PATCH",
          body: queryArg.project,
        }),
        invalidatesTags: ["projects"],
      }),
      projectsDelete: build.mutation<
        ProjectsDeleteApiResponse,
        ProjectsDeleteApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/${queryArg.id}/`,
          method: "DELETE",
        }),
        invalidatesTags: ["projects"],
      }),
    }),
    overrideExisting: false,
  });
export { injectedRtkApi as dfsmApi };
export type ProjectsListApiResponse = /** status 200  */ Project[];
export type ProjectsListApiArg = void;
export type ProjectsCreateApiResponse = /** status 201  */ Project;
export type ProjectsCreateApiArg = {
  project: Project;
};
export type ProjectsReadApiResponse = /** status 200  */ Project;
export type ProjectsReadApiArg = {
  /** A unique integer value identifying this dfsm project. */
  id: number;
};
export type ProjectsUpdateApiResponse = /** status 200  */ Project;
export type ProjectsUpdateApiArg = {
  /** A unique integer value identifying this dfsm project. */
  id: number;
  project: Project;
};
export type ProjectsPartialUpdateApiResponse = /** status 200  */ Project;
export type ProjectsPartialUpdateApiArg = {
  /** A unique integer value identifying this dfsm project. */
  id: number;
  project: Project;
};
export type ProjectsDeleteApiResponse = unknown;
export type ProjectsDeleteApiArg = {
  /** A unique integer value identifying this dfsm project. */
  id: number;
};
export type Project = {
  project_name: string;
  year: number;
  client: string;
};
export const {
  useProjectsListQuery,
  useLazyProjectsListQuery,
  useProjectsCreateMutation,
  useProjectsReadQuery,
  useLazyProjectsReadQuery,
  useProjectsUpdateMutation,
  useProjectsPartialUpdateMutation,
  useProjectsDeleteMutation,
} = injectedRtkApi;
