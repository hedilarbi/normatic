import AutomatedCorrections from "@/components/dashboard/AutomatedCorrections";
import ComplianceChart from "@/components/dashboard/ComplianceChart";
import ComplianceReports from "@/components/dashboard/ComplianceReports";
import CrititcalIssues from "@/components/dashboard/CrititcalIssues";
import DashboardHero from "@/components/dashboard/DashboardHero";
import ScanMonitoring from "@/components/dashboard/ScanMonitoring";
import SettingsConfig from "@/components/dashboard/SettingsConfig";
import React from "react";

const Page = () => {
  return (
    <div className="">
      <DashboardHero />
      <ComplianceChart />
      {/* <CrititcalIssues /> */}
      <ScanMonitoring />
      {/* <AutomatedCorrections /> */}
      <ComplianceReports />
      {/* <SettingsConfig /> */}
    </div>
  );
};

export default Page;
