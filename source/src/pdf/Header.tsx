import { Link, Text } from "@react-pdf/renderer";
import type { ResumeData } from "../content/data";
import { styles } from "./styles";

type ResumeHeaderProps = {
  profile: ResumeData["profile"];
};

export const ResumeHeader = ({ profile }: ResumeHeaderProps) => {
  return (
    <>
      <Text style={styles.name} role="H1">
        {profile.name}
      </Text>
      <Text style={styles.contactText} role="P">
        {profile.contacts.map((contact, index) => {
          const text = [contact.countryCode, contact.value]
            .filter(Boolean)
            .join(" ");

          return (
            <Text key={contact.label}>
              {contact.href ? (
                <Link src={contact.href} style={styles.link} role="Link">
                  {text}
                </Link>
              ) : (
                text
              )}
              {index < profile.contacts.length - 1 ? " | " : null}
            </Text>
          );
        })}
      </Text>
      <Text style={styles.headline} role="P">
        {profile.headline}
      </Text>
    </>
  );
};
