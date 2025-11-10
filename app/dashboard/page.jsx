"use client";
import AutomatedCorrections from "@/components/dashboard/AutomatedCorrections";
import ComplianceChart from "@/components/dashboard/ComplianceChart";
import ComplianceReports from "@/components/dashboard/ComplianceReports";
import CrititcalIssues from "@/components/dashboard/CrititcalIssues";
import DashboardHero from "@/components/dashboard/DashboardHero";
import ScanMonitoring from "@/components/dashboard/ScanMonitoring";
import SettingsConfig from "@/components/dashboard/SettingsConfig";
import React from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
const Page = () => {
  const router = useRouter();
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="flex w-full h-full justify-center items-center">
        Loading...
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="">
      <DashboardHero />
      {/* <ComplianceChart /> */}
      {/* <CrititcalIssues /> */}
      <ScanMonitoring uid={user.uid} />
      {/* <AutomatedCorrections /> */}
      <ComplianceReports />
      {/* <SettingsConfig /> */}
    </div>
  );
};

export default Page;
