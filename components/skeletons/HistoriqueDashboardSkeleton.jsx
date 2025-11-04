import React from "react";

const HistoriqueDashboardSkeleton = () => {
  return (
    <tbody className="divide-y divide-gray-200" role="rowgroup">
      {Array.from({ length: 4 }).map((_, idx) => (
        <tr key={idx} className="animate-pulse hover:bg-gray-50">
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 font-mono">
            <div className="w-36 h-5 bg-gray-200 dark:bg-gray-800 rounded-full" />
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 font-mono">
            <div className="w-36 h-5 bg-gray-200 dark:bg-gray-800 rounded-full" />
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
            <div className="w-20 h-5 bg-gray-200 dark:bg-gray-800 rounded-full" />
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
            <div className="w-20 h-5 bg-gray-200 dark:bg-gray-800 rounded-full" />
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
            <div className="w-20 h-5 bg-gray-200 dark:bg-gray-800 rounded-full" />
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
            <div className="w-20 h-5 bg-gray-200 dark:bg-gray-800 rounded-full" />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default HistoriqueDashboardSkeleton;
