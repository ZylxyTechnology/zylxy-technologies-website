"use client";

import PageTransition from "@/components/ui/PageTransition";
import { servicesData } from "@/data/services/servicesData";
import { servicesStyles as s } from "@/styles/services/services";
import Link from "next/link";
import { useState } from "react";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("All");
  const { header, categories, services } = servicesData;

  const visibleCategories =
    activeTab === "All"
      ? categories.filter((c) => c.id !== "All")
      : categories.filter((c) => c.id === activeTab);

  const getCategoryCount = (categoryId) => {
    if (categoryId === "All") return services.length;
    return services.filter((service) => service.category === categoryId).length;
  };

  const renderTabButton = (cat, variant = "mobile") => {
    const isActive = activeTab === cat.id;
    const count = getCategoryCount(cat.id);

    const buttonClass =
      variant === "desktop" ? s.tabBtnDesktop : s.tabBtnMobile;

    return (
      <button
        key={cat.id}
        type="button"
        onClick={() => setActiveTab(cat.id)}
        aria-pressed={isActive}
        className={`${buttonClass} ${
          isActive ? s.tabBtnActive : s.tabBtnInactive
        } group`}
      >
        <span className="text-inherit">{cat.label}</span>
        <span
          className={`${s.tabCounter} ${
            isActive ? s.tabCounterActive : s.tabCounterInactive
          }`}
        >
          {count}
        </span>
      </button>
    );
  };

  return (
    <PageTransition>
      <main className={s.detailPageWrapper}>
        <div className="max-w-[1200px] mx-auto w-full">
          <div className={s.headerRow}>
            <div className="max-w-3xl">
              <div className={s.pillLine}>
                <div className={s.pillLineBar} />
                <span className={s.pillText}>{header.pillText}</span>
              </div>

              <h1 className={s.mainHeading}>
                {activeTab === "All"
                  ? header.mainHeading
                  : categories.find((c) => c.id === activeTab)?.label}
              </h1>
              <p className={s.subHeading}>{header.subHeading}</p>
            </div>

            {/* Mobile + tablet: wrapped grid */}
            <div className={`w-full lg:hidden ${s.tabSection}`}>
              <div className={s.tabMobileGrid}>
                {categories.map((cat) => renderTabButton(cat, "mobile"))}
              </div>
            </div>

            {/* Large screens only: pill row */}
            <div className={`hidden lg:block w-full ${s.tabSection}`}>
              <div className={s.tabDesktopRow}>
                {categories.map((cat) => renderTabButton(cat, "desktop"))}
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            {activeTab === "All" ? (
              <div className={s.grid}>
                {services.map((service) => {
                  const Icon = service.icon;

                  return (
                    <Link
                      key={service.id}
                      href={service.customRoute || `/services/${service.id}`}
                      className={s.card}
                    >
                      <div className={s.cardHoverBg} />
                      <div className={s.cardContent}>
                        <div className={s.cardTopRow}>
                          <div
                            className={s.iconBox}
                            style={{
                              backgroundColor: service.accentBg,
                              borderColor: `${service.accent}20`,
                              color: service.accent,
                            }}
                          >
                            <Icon className="w-5 h-5 stroke-[1.5]" />
                          </div>

                          <div
                            className={s.cardArrow}
                            style={{ color: service.accent }}
                          >
                            →
                          </div>
                        </div>

                        <h3 className={s.cardTitle}>{service.title}</h3>
                        <p className={s.cardDesc}>{service.desc}</p>

                        <div className={s.tagBox}>
                          {service.tags.map((tag) => (
                            <span key={tag} className={s.tagItem}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : (
              visibleCategories.map((category) => {
                const categoryServices = services.filter(
                  (service) => service.category === category.id,
                );

                return (
                  <div key={category.id} className={s.pillarWrapper}>
                    <div className={s.pillarHeader}>
                      <h2 className={s.pillarTitle}>{category.label}</h2>
                      <span className={s.pillarBadge}>
                        {categoryServices.length} Services
                      </span>
                    </div>

                    <div className={s.grid}>
                      {categoryServices.map((service) => {
                        const Icon = service.icon;

                        return (
                          <Link
                            key={service.id}
                            href={
                              service.customRoute || `/services/${service.id}`
                            }
                            className={s.card}
                          >
                            <div className={s.cardHoverBg} />
                            <div className={s.cardContent}>
                              <div className={s.cardTopRow}>
                                <div
                                  className={s.iconBox}
                                  style={{
                                    backgroundColor: service.accentBg,
                                    borderColor: `${service.accent}20`,
                                    color: service.accent,
                                  }}
                                >
                                  <Icon className="w-5 h-5 stroke-[1.5]" />
                                </div>

                                <div
                                  className={s.cardArrow}
                                  style={{ color: service.accent }}
                                >
                                  →
                                </div>
                              </div>

                              <h3 className={s.cardTitle}>{service.title}</h3>
                              <p className={s.cardDesc}>{service.desc}</p>

                              <div className={s.tagBox}>
                                {service.tags.map((tag) => (
                                  <span key={tag} className={s.tagItem}>
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
