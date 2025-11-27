import React from "react";
import { ThemeMode } from "../types";

interface ChatHeaderProps {
    closeIcon: string;
    isOnline?: boolean;
    primaryColor?: string;
    theme?: ThemeMode;
    title: string;
    onClose: () => void;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({
    closeIcon,
    isOnline = true,
    primaryColor,
    theme = "light",
    title,
    onClose,
}) => {
    // Create computed styles for theming
    const headerStyle: React.CSSProperties = {
        ...(primaryColor &&
            ({
                "--chat-primary-color": primaryColor,
            } as React.CSSProperties)),
    };

    const headerClasses = ["chat-header", `chat-header--${theme}`]
        .filter(Boolean)
        .join(" ");

    return (
        <div
            className={headerClasses}
            style={headerStyle}
            data-has-primary-color={primaryColor ? "true" : undefined}
        >
            <h3 className="chat-title">{title}</h3>
            <div className="chat-status">
                <span
                    className={`chat-status-dot chat-status-dot--${
                        isOnline ? "online" : "offline"
                    }`}
                />
                <span>{isOnline ? "Online" : "Offline"}</span>
            </div>
            <button
                className="chat-close-button"
                onClick={onClose}
                aria-label="Close chat"
                type="button"
            >
                {closeIcon}
            </button>
        </div>
    );
};
