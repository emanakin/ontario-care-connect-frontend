"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import styles from "@/styles/components/services/ServiceGrid.module.css";
import Image from "next/image";
import { serviceGrid } from "@/content/pages/services";

export default function ServiceGrid({ initialTab }) {
  const router = useRouter();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(
    serviceGrid.typesOfService.find(
      (type) => type.toLowerCase().replace(" ", "-") === initialTab
    )
  );

  const handleTabChange = (type) => {
    const urlType = type.toLowerCase().replace(" ", "-");
    router.push(`/services/${urlType}`, { scroll: false });
    setActiveTab(type);
  };

  // Update tab when URL changes
  useEffect(() => {
    const urlType = pathname.split("/").pop();
    const matchingType = serviceGrid.typesOfService.find(
      (type) => type.toLowerCase().replace(" ", "-") === urlType
    );
    if (matchingType) {
      setActiveTab(matchingType);
    }
  }, [pathname]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* Tabs */}
        <div className={styles.tabs}>
          {serviceGrid.typesOfService.map((type, index) => (
            <button
              key={index}
              className={`${styles.tabButton} ${
                activeTab === type ? styles.active : ""
              }`}
              onClick={() => handleTabChange(type)}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Header */}
        <div className={styles.header}>
          <h2>
            {activeTab} <span>Services</span>
          </h2>
          <p>{serviceGrid.descriptions[activeTab]}</p>
        </div>

        {/* Service Grid */}
        <div className={styles.grid}>
          {serviceGrid.services[activeTab].map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={24}
                  height={24}
                />
              </div>
              <h3>{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
