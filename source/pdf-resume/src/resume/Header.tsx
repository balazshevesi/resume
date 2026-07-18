import { Text } from "@react-pdf/renderer";
import type { ResumeData } from "../content/data";
import { styles } from "./styles";

type ResumeHeaderProps = {
  profile: ResumeData["profile"];
};

export const ResumeHeader = ({ profile }: ResumeHeaderProps) => {
  const contacts = profile.contacts
    .map((contact) =>
      [contact.countryCode, contact.value].filter(Boolean).join(" "),
    )
    .join(" | ");

  return (
    <>
      <Text style={styles.name} role="H1">
        {profile.name}
      </Text>
      <Text style={styles.contactText} role="P">
        {contacts}
      </Text>
    </>
  );
};
