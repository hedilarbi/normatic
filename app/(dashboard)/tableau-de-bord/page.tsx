import AutomatedCorrections from "@/components/AutomatedCorrections";
import ComplianceChart from "@/components/ComplianceChart";
import ComplianceReports from "@/components/ComplianceReports";
import CrititcalIssues from "@/components/CrititcalIssues";
import DashboardHero from "@/components/DashboardHero";
import ScanMonitoring from "@/components/ScanMonitoring";
import SettingsConfig from "@/components/SettingsConfig";
import React from "react";

const page = () => {
  return (
    <>
      <DashboardHero />
      <ComplianceChart />
      <CrititcalIssues />
      <ScanMonitoring />
      <AutomatedCorrections />
      <ComplianceReports />
      <SettingsConfig />
    </>
  );
};

export default page;
