import { Text, View } from "@react-pdf/renderer";
import type { ResumeData } from "./data";
import { renderLinkedText } from "./resumeFormat";
import { styles } from "./resumeStyles";

type ResumeHeaderProps = {
  profile: ResumeData["profile"];
};

export const ResumeHeader = ({ profile }: ResumeHeaderProps) => (
  <View style={styles.header}>
    <Text style={styles.name}>{profile.name}</Text>
    <View style={styles.contacts}>
      {profile.contacts.map((contact) => {
        const value = [contact.countryCode, contact.value].filter(Boolean).join(" ");

        return (
          <Text key={contact.label} style={styles.contactText}>
            {contact.label}: {renderLinkedText(value, contact.href)}
          </Text>
        );
      })}
    </View>
  </View>
);
