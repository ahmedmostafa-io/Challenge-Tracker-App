import { AnimatePresence } from "framer-motion";
import Badge from "./Badge.jsx";
import { motion } from "motion/react";

function Tab({ isSelected, onSelect, badgeCaption, children }) {
  return (
    <AnimatePresence>
      <li>
        <button
          className={isSelected ? "selected" : undefined}
          onClick={onSelect}
        >
          {children}
          <Badge key={badgeCaption} caption={badgeCaption}></Badge>
        </button>
        {isSelected && (
          <motion.div
            layoutId="tab-indecator"
            className="active-tab-indicator"
          />
        )}
      </li>
    </AnimatePresence>
  );
}

export default function ChallengeTabs({
  selectedType,
  onSelectType,
  challenges,
  children,
}) {
  return (
    <>
      <menu id="tabs">
        <Tab
          isSelected={selectedType === "active"}
          onSelect={() => onSelectType("active")}
          badgeCaption={challenges.active.length}
        >
          Active
        </Tab>
        <Tab
          isSelected={selectedType === "completed"}
          onSelect={() => onSelectType("completed")}
          badgeCaption={challenges.completed.length}
        >
          Completed
        </Tab>
        <Tab
          isSelected={selectedType === "failed"}
          onSelect={() => onSelectType("failed")}
          badgeCaption={challenges.failed.length}
        >
          Failed
        </Tab>
      </menu>
      <div>{children}</div>
    </>
  );
}
