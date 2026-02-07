import { Stack, Typography } from "@mui/material";
import { Email, Hotline } from "../../assets/Icons/Footer/Icons";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function Contacts() {
  const [emails, setEmails] = useState([]);
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const { data } = await axios.get("/contact-info");

        if (data?.length > 0) {
          const contact = data[0];

          setEmails(contact.emails || []);
          setPhones(contact.phoneNumbers || []);
        }
      } catch (err) {
        toast.error("Failed to load contact info", err.message);
      }
    };

    fetchContactInfo();
  }, []);

  return (
    <Stack gap="24px">
      <Typography variant="h6">Contacts</Typography>

      <Stack gap="16px" flexDirection="column">
        {/* Phone Numbers */}
        {phones.length > 0 && (
          <Stack>
            <Stack gap="8px" flexDirection="row">
              <Hotline size="20px" color="#000" />
              <Typography fontWeight="700">Hotline</Typography>
            </Stack>

            <Stack gap="4px" mt={0.5}>
              {phones.map((phone, index) => (
                <Typography
                  key={index}
                  color="text.secondary"
                  sx={{ cursor: "pointer" }}
                >
                  {phone}
                </Typography>
              ))}
            </Stack>
          </Stack>
        )}

        {/* Emails */}
        {emails.length > 0 && (
          <Stack>
            <Stack gap="8px" flexDirection="row">
              <Email size="20px" color="#000" />
              <Typography fontWeight="700">Email</Typography>
            </Stack>

            <Stack gap="4px" mt={0.5}>
              {emails.map((email, index) => (
                <Typography
                  key={index}
                  color="text.secondary"
                  sx={{ cursor: "pointer" }}
                >
                  {email}
                </Typography>
              ))}
            </Stack>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
}
