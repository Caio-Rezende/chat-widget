import React from "react";

interface ChatHeaderProps {
    title: string;
    closeIcon: string;
    theme?: "light" | "dark" | "auto";
    primaryColor?: string;
    onClose: () => void;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({
    title,
    closeIcon,
    theme = "light",
    primaryColor,
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
