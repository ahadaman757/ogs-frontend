import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  PDFDownloadLink,
  Image,
  Font,
} from '@react-pdf/renderer';
import { useLocation } from 'react-router-dom';

import font from '../Assets/Noto_Sans_Arabic/NotoSansArabic-VariableFont_wdth,wght.ttf';
// Create styles
const styles = StyleSheet.create({
  arabic: {
    fontSize: 10,
    fontFamily: 'Noto',
    lineHeight: 2,
  },
  page: {
    backgroundColor: '#ffff',
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    width: window.innerWidth, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
  section: {
    margin: 10,
    padding: 10,
  },
  viewer: {
    width: window.innerWidth, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
  image: {
    width: 500,
    height: 500,
    display: 'flex',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  header_right_side: {
    display: 'flex',
    flexDirection: 'column',
  },
  main_padding: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    fontSize: 12,
  },
  colored_title: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#fec750',
    border: '1px solid #8B8B8B',
  },
  h1: {
    fontSize: 18,
  },
  profile: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profile_info_right: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  profile_left_container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  profile_image_container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  info_title: {
    fontWeight: 700,
    fontSize: 10,
    color: '#000000',
    // border: "1px solid green"
  },
  info_value: {
    color: '#B50202',
    // color: "red",
    // fontWeight: 700,
    fontSize: 9,
    // border: "1px solid green"
  },
  cv_content: {
    paddingRight: 15,
    paddingLeft: 15,
  },
  info_grid: {
    display: 'flex',
    flexDirection: 'row',
    // flexGrow: 1,
    gap: 10,
  },
  left_column: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    flexBasis: 0,
    paddingRight: 10,
    // border: "1px solid blue"
  },
  right_column: {
    display: 'flex',
    flexBasis: 0,

    flexGrow: 1,
    flexDirection: 'column',
    // border: "1px solid blue"
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  section_heading: {
    paddingTop: 5,
    paddingBottom: 5,
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
    border: '1px solid black',
    paddingLeft: 5,
    paddingRight: 5,
  },
  col_1: {
    display: 'flex',
    flexDirection: 'row',
    flexBasis: 0,
    flexGrow: 1,
    // border: "1px solid green"
  },
  col_2: {
    alignItems: 'center',
    flexBasis: 0,
    flexGrow: 1.2,
    display: 'flex',
    flexDirection: 'row',
    // border: "1px solid green",
    justifyContent: 'space-between',
  },
  col_3: {
    flexBasis: 0,
    flexGrow: 1,
    border: '1px solid green',
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  section_heading_text: {
    fontSize: 10,
    fontWeight: 300,
  },
  right_col: {
    flexGrow: 1,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo_img: {
    width: 50,
    height: 50,
  },
  profile_img: {
    width: 100,
    height: 100,
  },
  profile_image_container: {
    paddingRight: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
// Create Document Component
Font.register({
  family: 'Noto',
  src: font,
});
function BasicDocument({ cv_data }) {
  return (
    <>
      {/* <PDFViewer style={styles.viewer}> */}
      <Document>
        {/*render a single page*/}
        <Page size={'A4'} style={styles.page}>
          {/* header_start */}
          <View
            style={{
              ...styles.header,
              ...styles.main_padding,
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <View>
              <Image
                style={styles.logo_img}
                src={require('../Assets/Images/image 1.png')}
              />
            </View>
            <View style={styles.header_right_side}>
              <Text style={{ ...styles.text }}>Email:{cv_data.email}</Text>
              <Text style={{ ...styles.text }}>
                Contact No:{cv_data.mobile_number}
              </Text>
            </View>
          </View>
          {/* header_end */}
          <View style={styles.colored_title}>
            <Text style={{ ...styles.h1 }}>Application Form</Text>
          </View>
          {/* yellow div end */}
          <View style={styles.cv_content}>
            <View style={{ ...styles.profile }}>
              <View style={styles.profile_image_container}>
                <Image
                  style={styles.profile_img}
                  src={`https://3.110.201.21:3002/${cv_data.cv_image.replace(
                    'images',
                    'images/'
                  )}`}
                />
              </View>
              <View style={styles.profile_info_right}>
                <View style={styles.right_col}>
                  <Text style={styles.info_title}>Full Name</Text>
                  <Text style={{ ...styles.info_title, ...styles.arabic }}>
                    الاسم الكامل
                  </Text>
                </View>
                <View style={styles.right_col}>
                  <Text style={styles.info_value}>
                    {cv_data.first_name + ' ' + cv_data.last_name}
                  </Text>
                  <Text style={{ ...styles.info_title, ...styles.arabic }}>
                    أحمد خان
                  </Text>
                </View>
                <View style={styles.right_col}>
                  <Text style={styles.info_title}>Occupation</Text>
                  <Text style={{ ...styles.info_title, ...styles.arabic }}>
                    إشغال
                  </Text>
                </View>
                <View style={styles.right_col}>
                  <Text style={styles.info_value}>
                    {cv_data.position_title}
                  </Text>
                  <Text style={{ ...styles.info_title, ...styles.arabic }}>
                    مطور ويب
                  </Text>
                </View>
                <View style={styles.right_col}>
                  <Text style={styles.info_title}>Total Work Experience</Text>
                  <Text style={{ ...styles.info_title, ...styles.arabic }}>
                    خبرة عمل كاملة
                  </Text>
                </View>
                <View style={styles.right_col}>
                  <Text style={styles.info_value}>
                    {cv_data.max_experience}
                  </Text>
                  <Text style={{ ...styles.info_title, ...styles.arabic }}>
                    12 سنة
                  </Text>
                </View>
                <View style={styles.right_col}>
                  <Text style={styles.info_title}>Expected salary</Text>
                  <Text style={{ ...styles.info_title, ...styles.arabic }}>
                    الراتب المتوقع
                  </Text>
                </View>
                <View style={styles.right_col}>
                  <Text style={styles.info_value}>
                    {cv_data.expected_salary}
                  </Text>
                  <Text style={{ ...styles.info_title, ...styles.arabic }}>
                    2000 ريال
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.info_grid}>
              <View style={styles.left_column}>
                <View style={styles.section_heading}>
                  <Text style={styles.section_heading_text}>
                    Application Details
                  </Text>
                </View>
                <View style={styles.row}>
                  <View style={styles.col_1}>
                    <Text style={styles.info_title}>NATIONALITY</Text>
                  </View>
                  <View style={styles.col_2}>
                    <Text style={styles.info_value}>{cv_data.country}</Text>
                    <Text style={{ ...styles.info_title, ...styles.arabic }}>
                      جنسية
                    </Text>
                  </View>
                </View>
                <View style={styles.row}>
                  <View style={styles.col_1}>
                    <Text style={styles.info_title}>RELIGION</Text>
                  </View>
                  <View style={styles.col_2}>
                    <Text style={styles.info_value}>{cv_data.religion}</Text>
                    <Text style={{ ...styles.info_title, ...styles.arabic }}>
                      دين
                    </Text>
                  </View>
                </View>
                <View style={styles.row}>
                  <View style={styles.col_1}>
                    <Text style={styles.info_title}>DATE OF BIRTH</Text>
                  </View>
                  <View style={styles.col_2}>
                    <Text style={styles.info_value}>{cv_data.Dob}</Text>
                    <Text style={{ ...styles.info_title, ...styles.arabic }}>
                      تاريخ الولادة
                    </Text>
                  </View>
                </View>
                <View style={styles.row}>
                  <View style={styles.col_1}>
                    <Text style={styles.info_title}>BIRTH PLACE</Text>
                  </View>
                  <View style={styles.col_2}>
                    <Text style={styles.info_value}>{cv_data.domicile}</Text>
                    <Text style={{ ...styles.info_title, ...styles.arabic }}>
                      مكان الولادة
                    </Text>
                  </View>
                </View>
                <View style={styles.row}>
                  <View style={styles.col_1}>
                    <Text style={styles.info_title}>AGE</Text>
                  </View>
                  <View style={styles.col_2}>
                    <Text style={styles.info_value}>{cv_data.age}</Text>
                    <Text style={{ ...styles.info_title, ...styles.arabic }}>
                      سن
                    </Text>
                  </View>
                </View>
                <View style={styles.row}>
                  <View style={styles.col_1}>
                    <Text style={styles.info_title}>ADDRESS</Text>
                  </View>
                  <View style={styles.col_2}>
                    <Text style={styles.info_value}>{cv_data.address}</Text>
                    <Text style={{ ...styles.info_title, ...styles.arabic }}>
                      تبوك
                    </Text>
                  </View>
                </View>
                <View style={styles.row}>
                  <View style={styles.col_1}>
                    <Text style={styles.info_title}>Marital Status</Text>
                  </View>
                  <View style={styles.col_2}>
                    <Text style={styles.info_value}>{cv_data.status}</Text>
                    <Text s style={{ ...styles.info_title, ...styles.arabic }}>
                      الحالة الزوجية
                    </Text>
                  </View>
                </View>
                <View style={styles.row}>
                  <View style={styles.col_1}>
                    <Text style={styles.info_title}>WEIGHT</Text>
                  </View>
                  <View style={styles.col_2}>
                    <Text style={styles.info_value}>{cv_data.weight}</Text>
                    <Text style={{ ...styles.info_title, ...styles.arabic }}>
                      وزن
                    </Text>
                  </View>
                </View>
                <View style={styles.row}>
                  <View style={styles.col_1}>
                    <Text style={styles.info_title}>HEIGHT</Text>
                  </View>
                  <View style={styles.col_2}>
                    <Text style={styles.info_value}>{cv_data.height}</Text>
                    <Text style={{ ...styles.info_title, ...styles.arabic }}>
                      الراتب المتوقع
                    </Text>
                  </View>
                </View>
                <View style={styles.row}>
                  <View style={styles.col_1}>
                    <Text style={styles.info_title}>SKIN COLOR</Text>
                  </View>
                  <View style={styles.col_2}>
                    <Text style={styles.info_value}>{cv_data.skin_color}</Text>
                    <Text style={{ ...styles.info_title, ...styles.arabic }}>
                      لون البشرة
                    </Text>
                  </View>
                </View>
                <View style={styles.row}>
                  <View style={styles.col_1}>
                    <Text style={styles.info_title}>EDUCATION</Text>
                  </View>
                  <View style={styles.col_2}>
                    <Text style={styles.info_value}>
                      {cv_data.qualification}
                    </Text>
                    <Text style={{ ...styles.info_title, ...styles.arabic }}>
                      التعليم
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    ...styles.section_heading,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Text style={styles.section_heading_text}>LANGUAGE</Text>
                  <Text style={{ ...styles.info_title, ...styles.arabic }}>
                    لغة
                  </Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.info_title}>Language</Text>
                  <Text style={styles.info_title}>Weak</Text>
                  <Text style={styles.info_title}>Average</Text>
                  <Text style={styles.info_title}>Good</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.info_title}>Arabic</Text>
                  <Text style={styles.info_title}>No</Text>

                  <Text style={styles.info_title}>No</Text>
                  <Text style={styles.info_title}>Yes</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.info_title}>Engish</Text>
                  <Text style={styles.info_title}>No</Text>

                  <Text style={styles.info_title}>Yes</Text>
                  <Text style={styles.info_title}>No</Text>
                </View>
                <View
                  style={{
                    ...styles.section_heading,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Text style={styles.section_heading_text}>
                    Experience Overseas
                  </Text>
                  <Text
                    style={{ ...styles.section_heading_text, ...styles.arabic }}
                  >
                    تجربة في الخارج
                  </Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.info_title}>Country</Text>
                  <Text style={styles.info_title}>Period</Text>

                  <Text style={styles.info_title}>Occupation</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.info_value}>Saudi Arabia</Text>
                  <Text style={styles.info_value}>1-4 years</Text>

                  <Text style={styles.info_value}>Driver</Text>
                </View>
              </View>
              <View style={styles.right_column}>
                <View style={styles.section_heading}>
                  <Text style={styles.section_heading_text}>
                    Passport Details
                  </Text>
                </View>
                <View style={styles.row}>
                  <View style={styles.col_1}>
                    <Text style={styles.info_title}>PASSPORT NO</Text>
                  </View>
                  <View style={styles.col_2}>
                    <Text style={styles.info_value}>
                      {cv_data.passport_number}
                    </Text>
                    <Text style={{ ...styles.info_title, ...styles.arabic }}>
                      رقم جواز السفر
                    </Text>
                  </View>
                </View>
                <View style={styles.row}>
                  <View style={styles.col_1}>
                    <Text style={styles.info_title}>DATE OF ISSUE</Text>
                  </View>
                  <View style={styles.col_2}>
                    <Text style={styles.info_value}>
                      {cv_data.passport_issue_date}
                    </Text>
                    <Text style={{ ...styles.info_title, ...styles.arabic }}>
                      تاريخ المسألة
                    </Text>
                  </View>
                </View>
                <View style={styles.row}>
                  <View style={styles.col_1}>
                    <Text style={styles.info_title}>DATE OF EXPIRY</Text>
                  </View>
                  <View style={styles.col_2}>
                    <Text style={styles.info_value}>{cv_data.valid_upto}</Text>
                    <Text style={{ ...styles.info_title, ...styles.arabic }}>
                      تاريخ الانتهاء
                    </Text>
                  </View>
                </View>
                <View style={styles.row}>
                  <View style={styles.col_1}>
                    <Text style={styles.info_title}>ERC/ECNR</Text>
                  </View>
                  <View style={styles.col_2}>
                    <Text style={styles.info_value}>ECNR</Text>
                    <Text style={{ ...styles.info_title, ...styles.arabic }}>
                      الراتب المتوقع
                    </Text>
                  </View>
                </View>
                <Image
                  src={`https://3.110.201.21:3002/${cv_data.passport_photo.replace(
                    'images',
                    'images/'
                  )}`}
                />
              </View>
            </View>
          </View>
        </Page>
      </Document>
      {/* </PDFViewer> */}
    </>
  );
}
const App = () => {
  return (
    <>
      {/* <BasicDocument cv_data={cv} /> */}
      <PDFDownloadLink document={<BasicDocument />} fileName="somename.pdf">
        {({ loading, error }) => {
          console.log(error);
          return loading ? 'Loading document...' : 'Download now!';
        }}
      </PDFDownloadLink>
    </>
  );
};
export { BasicDocument };
export default App;
