// UI Components
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/views/components/shadcn/tabs'

// Data
import { ScheduleTable } from '@/data/tables'

// Local Components
import JobHistory from './JobHistory'

// Main Component
function PreConfiguredJobs() {
  return (
    <div>
      <Tabs defaultValue="schedule">
        {/* Tab Headers */}
        <TabsList className="tabs">
          <TabsTrigger className="tab tab-lifted" value="schedule">
            Schedule for Preconfigured Jobs
          </TabsTrigger>
          <TabsTrigger className="tab tab-lifted" value="history">
            Job Execution History
          </TabsTrigger>
        </TabsList>
        {/* Scheduled Jobs and Execution History */}
        <TabsContent value="schedule">
          <ScheduleTable />
        </TabsContent>
        <TabsContent value="history">
          <JobHistory />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default PreConfiguredJobs
