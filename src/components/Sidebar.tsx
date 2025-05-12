import React from "react";
import { Icon } from "@iconify/react";
import { Input, Badge, Card, Divider, Button, Tooltip } from "@heroui/react";
import { motion, AnimatePresence } from "framer-motion";

interface SidebarItem {
  icon: string;
  title: string;
  description?: string;
  isActive?: boolean;
  isNew?: boolean;
}

// Add new gradient animation keyframes
const sidebarItems: SidebarItem[] = [
  {
    icon: "lucide:layout-dashboard",
    title: "Dashboard",
    description: "Overview",
    isActive: false,
  },
  {
    icon: "lucide:trophy",
    title: "Leagues",
    description: "Manage leagues",
  },
  {
    icon: "lucide:calendar-clock",
    title: "Matches",
    description: "Match schedules",
    isActive: true,
  },
  {
    icon: "lucide:activity",
    title: "Analysis",
    description: "Data analytics",
    isNew: true,
  },
  {
    icon: "lucide:boxes",
    title: "Patterns",
    description: "Play patterns",
  },
];

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredItems = sidebarItems.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.aside
      initial={false}
      animate={{
        width: isCollapsed ? "5rem" : "18rem",
      }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="relative h-screen flex flex-col bg-gradient-to-b from-[#0F1225] to-[#0A0C1C] border-r border-[#1E2235]/50 overflow-hidden"
    >
      {/* Collapse Button */}
      <Button
        isIconOnly
        variant="flat"
        size="sm"
        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        className="absolute -right-2.5 top-6 z-50 bg-[#1E2235] text-white hover:bg-[#2A2F4A] shadow-lg"
        onPress={() => setIsCollapsed(!isCollapsed)}
      >
        <Icon
          icon={isCollapsed ? "lucide:chevron-right" : "lucide:chevron-left"}
          className="h-4 w-4"
        />
      </Button>

      {/* Header */}
      <div className="p-5">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-[#4338CA] to-[#6366F1] flex items-center justify-center shrink-0 shadow-lg shadow-indigo-500/20">
            <Icon icon="lucide:activity" className="h-5 w-5 text-white" />
          </div>
          <AnimatePresence>
            {!isCollapsed && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
              >
                <h1 className="text-lg font-semibold text-white tracking-wide">V-SPORTS</h1>
                <p className="text-xs font-medium text-[#64748B]">League Management</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <Divider className="my-2" />

      {/* Search - Updated styling */}
      <AnimatePresence>
        {!isCollapsed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="px-4 mb-4"
          >
            <Input
              placeholder="Quick search..."
              size="sm"
              value={searchQuery}
              onValueChange={setSearchQuery}
              startContent={<Icon icon="lucide:search" className="text-[#64748B]" />}
              classNames={{
                base: "max-w-full h-11",
                mainWrapper: "h-11",
                input: "text-small text-white placeholder:text-[#64748B]/70",
                inputWrapper: "h-11 bg-[#1E2235]/50 hover:bg-[#1E2235]/70 transition-colors duration-200 border-none shadow-inner shadow-black/10",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation - Updated styling */}
      <nav className="flex-1 px-3 overflow-y-auto">
        <div className="space-y-1.5">
          {filteredItems.map((item, index) => (
            <Tooltip
              key={index}
              content={isCollapsed ? item.title : ""}
              placement="right"
              delay={200}
            >
              <button
                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 group ${
                  item.isActive
                    ? "bg-gradient-to-r from-[#4338CA] to-[#6366F1] text-white shadow-lg shadow-indigo-500/20"
                    : "hover:bg-[#1E2235]/50 text-[#94A3B8] hover:text-white"
                }`}
              >
                <div className="relative">
                  <Icon
                    icon={item.icon}
                    className={`h-5 w-5 transition-transform duration-200 group-hover:scale-110 ${
                      item.isActive ? "text-white" : "text-[#94A3B8] group-hover:text-white"
                    }`}
                  />
                  {item.isNew && (
                    <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500 shadow-lg shadow-red-500/50" />
                  )}
                </div>
                <AnimatePresence>
                  {!isCollapsed && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-1 text-left"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">{item.title}</span>
                        {item.isNew && (
                          <Badge 
                            color="danger" 
                            variant="flat" 
                            size="sm"
                            className="bg-red-500/10 text-red-500"
                          >
                            NEW
                          </Badge>
                        )}
                      </div>
                      {item.description && (
                        <span className="text-xs font-medium text-[#64748B] group-hover:text-[#94A3B8]">
                          {item.description}
                        </span>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
                {!isCollapsed && (
                  <Icon
                    icon="lucide:chevron-right"
                    className={`h-4 w-4 transition-transform duration-200 ${
                      item.isActive ? "text-white" : "text-[#64748B] group-hover:text-white"
                    } ${item.isActive ? "translate-x-0" : "group-hover:translate-x-1"}`}
                  />
                )}
              </button>
            </Tooltip>
          ))}
        </div>
      </nav>
    </motion.aside>
  );
};
