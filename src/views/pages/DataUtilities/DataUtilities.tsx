// UI Components
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/views/components/shadcn/tabs'

// Specific Forms and Components
import { DataJobTable } from '@/data/tables'
import SpecSplittingForm from './SpecSplittingForm'
import DMDataReconciliationForm from './DMDataReconciliationForm'
import DataComparisonForm from './DataComparisonForm'

// Main Component
function DataUtilities() {
  return (
    <div className="flex flex-col space-y-2">
      <div className="">
        <Tabs>
          {/* Tab Headers */}
          <TabsList className="tabs ">
            <TabsTrigger className="tab tab-lifted" value="data comparison">
              Data Comparison
            </TabsTrigger>
            <TabsTrigger
              className="tab tab-lifted"
              value="dm data reconciliation"
            >
              DM Data Reconciliation
            </TabsTrigger>
            <TabsTrigger className="tab tab-lifted" value="spec splitting">
              Spec Splitting
            </TabsTrigger>
          </TabsList>
          {/* Data Utilities */}
          <TabsContent value="data comparison" className="bg-neutral p-4">
            <DataComparisonForm />
          </TabsContent>
          <TabsContent
            value="dm data reconciliation"
            className="bg-neutral p-4"
          >
            <DMDataReconciliationForm />
          </TabsContent>
          <TabsContent value="spec splitting" className="bg-neutral p-4">
            <SpecSplittingForm />
          </TabsContent>
        </Tabs>
      </div>
      {/* Data Utility Execution History */}
      <div>
        <DataJobTable />
      </div>
    </div>
  )
}

export default DataUtilities
