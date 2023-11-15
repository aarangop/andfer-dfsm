import PrimaryButton from "@/components/PrimaryButton";
import { getProjects } from "@/lib/api/projects";

export default async function ProjectsRoot() {
  const response = await getProjects();
  const error = response.error;
  const projects = response.response;
  console.log(error);

  return (
    <main className="flex flex-col items-start p-4 justify-between w-full h-full">
      <h2 className="text-xl font-semibold w-full mb-8">Projects</h2>
      <div className="grow w-full flex flex-col justify-start">
        {!error && (
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
        {error && <p className="text-center text-red-300">{error.detail}</p>}
      </div>
      <div>
        <PrimaryButton>New Project</PrimaryButton>
      </div>
    </main>
  );
}
