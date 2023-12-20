import React from "react";
import {
  Container,
  Box,
  Stack,
  Tab,
  Accordion,
  Typography,
  AccordionDetails,
  Button,
} from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { TabContext, TabPanel } from "@mui/lab";
import TabList from "@mui/lab/TabList";
import "../../../css/help.css";
import Marginer from "../../components/marginer";

export function HelpPage() {
  // Initializations//
  const [value, setValue] = React.useState("1");
  const faq = [
    {
      question: "Tolovni qanday amalga oshiriladi?",
      answer: "Tolov payme, click orqali amalga oshirishingiz mumkin",
    },
    {
      question: "Buyurtma qancha vaqtda yetib keladi",
      answer:
        "Buyurtmangiz harid qilgan narsangizga qarab yetib boradi Maksimum 2soat",
    },
    {
      question: "Saytdan foydalansam malumot havfsizligi kafalatlanadimi?",
      answer:
        "Albatta bizning dasturchilarimiz malumotlaringizni havfsiz saqlaydilar",
    },
    {
      question: "saytda muammo yuzaga kelsa kimga murojat qilaman?",
      answer:
        "Iltimos adminga xabar yollash bolimidan foydalanib admin bilan boglaning",
    },
    {
      question:
        "Men foydalanuvchi emas Biznesmen sifatida saytdan foydalanmoqchiman",
      answer: "Hurmatli mijoz saytda korsatilgan raqamlarga boglaning",
    },
    {
      question:
        "Koreadan turib O'zbekistonga oilam uchun ovqat zakaz qilsam boladimi?",
      answer:
        "Albatta, chetdan turib visa va master bundan tashqari payme orqali ham tolovni amalga oshira olasiz!",
    },
    {
      question: "Sayt rivoji uchun o'z hissamni qoshmoqchiman",
      answer: "Albatta, bu uchun adminga xat qoldirishingiz mumkin",
    },
    {
      question: "Karta ma'lumotlarini qayerga kiritaman?",
      answer:
        "Karta ma'lumotlarini mening sahifam o'ng tomonida mavjud bo'lgan jadvalga kiriting!",
    },
    {
      question: "Maqola yozishizni xohlayman?",
      answer:
        "Maqola yozish uchun mening sahifamdagi maqola yozish tugmasini bosish orqali yoza olasiz!",
    },
  ];
  const rules = [
    `Saytdan to'laqonli yani buyurtmalar qilish, 
    jonli muloqotlardan foydalanishingiz uchun ro'yxatdan o'tishingiz shart.`,
    `*Buyurtmalaringizga to'lovni amalga oshirganingizdan so'ng bekor qilishning 
     imkoni yo'q shu sababli to'lovlarni amalga oshirishdan avval tekshirib oling.`,
    `Jonli muloqot vaqtida bexayo so'zlarni ishlatish mutlaqo taqiqlanadi.`,
    `Shaxsiy reklamalarni adminning ruxsatisiz yozish va tarqatish mumkun emas.`,
    `Maqolalaringiz odob doirasidan chiqib ketmasligi shart.`,
    `Barcha xarakatlaringiz adminlarimiz nazorati ostida bo'lani sabab iltimos talablarimizni xurmat qiling.`,
    `Har qanday shikoyat bolsa adminlarimizga bog'laning!`,
    `Iltimos hurmatli foydalanuvchialr bir-biringizga hurmatda bo'ling!`,
    `Web sahifammiz copyrightga ega!`,
    `Bu web sahifammiz manzur bo'lgan bo'lsa yaqinlarigizga ulashib qo'ysangiz samimiy xursand bo'lamiz!`,
  ];

  // Handlers//
  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="help_page">
      <Container maxWidth="lg" sx={{ mt: "50px", mb: "50px" }}>
        <TabContext value={value}>
          <Box className={"help_menu"}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Tab
                  style={{ marginLeft: "150px", marginRight: "150px" }}
                  label="Qoidalar"
                  value={"1"}
                />
                <Tab
                  style={{ marginLeft: "150px", marginRight: "150px" }}
                  label="FAQ"
                  value={"2"}
                />
                <Tab
                  style={{ marginLeft: "150px", marginRight: "150px" }}
                  label="Adminga xat"
                  value={"3"}
                />
              </TabList>
            </Box>
          </Box>
          <Stack alignItems={"center"} sx={{ width: "100%", height: "auto" }}>
            <Stack className="help_main_content">
              <Box sx={{ mt: "30px" }}>
                <Marginer width="1272px" height="1" bg="#fff" />
              </Box>

              <TabPanel value={"1"}>
                <Stack className="theRules_box">
                  <Box className="theRulesFrame">
                    {rules.map((ele) => {
                      return <p>{ele}</p>;
                    })}
                  </Box>
                </Stack>
              </TabPanel>

              <TabPanel value={"2"}>
                <Stack className="accordian_menu">
                  {faq.map((ele) => {
                    return (
                      <Accordion>
                        <AccordionSummary
                          style={{ marginLeft: "35px" }}
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panella-cintent"
                          id="panella-header"
                        >
                          <Typography sx={{ mb: "15px" }}>
                            {ele.question}
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>{ele.answer}</Typography>
                        </AccordionDetails>
                      </Accordion>
                    );
                  })}
                </Stack>
              </TabPanel>

              <TabPanel value={"3"}>
                <Stack className="admin_letter_box">
                  <Stack className="admin_letter_container">
                    <Box className="admin_letter_frame">
                      <span>Adminga habar qoldirish</span>
                      <p>
                        Assalomu alekum! Adminga habar qoldirish uchun formlarni
                        to'ldiring{" "}
                      </p>
                    </Box>
                    <form
                      action="#"
                      method="POST"
                      className="admin_letter_frame"
                    >
                      <div className="admin_input_box">
                        <label>Ism</label>
                        <input type="text" name="mb_nick" placeholder="Ism" />
                      </div>
                      <div className="admin_input_box">
                        <label>Elektron Manzil</label>
                        <input
                          type="text"
                          name="mb_email"
                          placeholder="Elektron Manzil"
                        />
                      </div>
                      <div className="admin_input_box">
                        <label>Xabar</label>
                        <textarea name="mb_msg" placeholder="Xabar"></textarea>
                      </div>
                      <Box
                        className="admin_btn"
                        display={"flex"}
                        justifyContent={"flex-end"}
                        sx={{ mt: "30px" }}
                      >
                        <Button
                          style={{ marginTop: "10px" }}
                          type="submit"
                          variant="contained"
                        >
                          Jo'natish
                        </Button>
                      </Box>
                    </form>
                  </Stack>
                </Stack>
              </TabPanel>
            </Stack>
          </Stack>
        </TabContext>
      </Container>
    </div>
  );
}
