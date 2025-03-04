import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { toast } from "sonner";
import DashCardData from "@/components/dashboard/dash-card-data";
import { BadgePlus } from "lucide-react";
import DashTable from "@/components/dashboard/dash-table";
import { DashBarChart } from "@/components/dashboard/dash-bar-chart";


export default async function Home() {

  return (
    <main>
      <Tabs defaultValue="dash">
        <Card className="w-fit mx-auto mt-2 mb-10">
          <TabsList>
            <TabsTrigger value="dash">Dashboard</TabsTrigger>
            <TabsTrigger value="job">Job Listing</TabsTrigger>
          </TabsList>
        </Card>

        <TabsContent value="dash">
          <DashCardData />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mx-10 mb-5">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <DashBarChart />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Recent Jobs</CardTitle>
                <CardDescription>
                  You made 12 jobs this month.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <DashTable />
              </CardContent>
            </Card>
          </div>

          {/* <LineSalesChart /> */}
        </TabsContent>

        <TabsContent value="job">
          <div className="flex justify-end mr-10">
            <Tooltip>
              <a href="/createJob">
                <TooltipTrigger asChild>
                  <Button className="">
                    <BadgePlus  size={20} />
                  </Button>
                </TooltipTrigger>
              </a>
              <TooltipContent className="mb-1">
                <p>Create Job</p>
              </TooltipContent>
            </Tooltip>
          </div>

          {/* <DataTable columns={jobColumn} data={jobData} /> */}
        </TabsContent>
      </Tabs>
    </main>
  );
}