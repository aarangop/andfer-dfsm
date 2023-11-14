"use client";

import PrimaryButton from "@/components/PrimaryButton";
import { useProjectsListQuery } from "@/store/api/dfsmApi";

export default function ProjectsRoot() {
  const { data: projects, isSuccess, isError } = useProjectsListQuery();
  return (
    <main className="flex flex-col items-start p-4 justify-between w-full h-full">
      <h2 className="text-xl font-semibold w-full mb-8">Projects</h2>
      <div className="grow w-full flex flex-col justify-start">
        {isSuccess && (
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th>Year</th>
                <th>Number</th>
                <th>Client</th>
                <th>Project ID</th>
                <th>Quoted Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {projects && (
                <tr>
                  <th></th>
                </tr>
              )}
            </tbody>
            <tfoot></tfoot>
          </table>
        )}
        {isError && (
          <p className="text-center text-red-300">
            There was an error retrieving the projects
          </p>
        )}
      </div>
      <div>
        <PrimaryButton>New Project</PrimaryButton>
      </div>
    </main>
  );
};
