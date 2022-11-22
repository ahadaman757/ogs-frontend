import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFViewer,
    PDFDownloadLink,
    Image
} from "@react-pdf/renderer";
// Create styles
const styles = StyleSheet.create({
    page: {
        backgroundColor: "#ffff",
        color: "black",
        display: "flex",
        flexDirection: "column",
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
        display: 'flex'
    },
    header: {
        display: "flex",
        justifyContent: "space-between"
    },
    header_right_side: {
        display: "flex",
        flexDirection: "column"
    },
    main_padding: {
        paddingLeft: 10,
        paddingRight: 10
    },
    text: {
        fontSize: 12
    },
    colored_title: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "#fec750"
    },
    h1: {
        fontSize: 18
    },
    profile: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    profile_info_left: {
        display: "flex",
        flexDirection: "column",

    }, profile_left_container: {
        display: "flex",
        flexDirection: "row",
        gap: 10
    },
    profile_image_container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
});
// Create Document Component
function BasicDocument({ cv_data }) {
    return (
        <>
            <Document>
                {/*render a single page*/}
                <Page size="A4" style={styles.page}>
                    {/* header_start */}
                    <View style={{ ...styles.header, ...styles.main_padding }}>
                        <View>
                            <Text style={{ ...styles.text }}>
                                Company Logo
                            </Text>
                        </View>
                        <View style={styles.header_right_side}>
                            <Text style={{ ...styles.text }}>
                                Email:alue6988@gmail.com
                            </Text>
                            <Text style={{ ...styles.text }}>
                                Whatsapp/Contact No:{cv_data.contact_number}
                            </Text>
                        </View>
                    </View>
                    {/* header_end */}
                    <View style={styles.colored_title}>
                        <Text style={{ ...styles.h1 }}>
                            Application Form
                        </Text>
                    </View>
                    {/* yellow div end */}
                    <View style={styles.profile}>
                        <View style={styles.profile_left_container} >
                            <View style={styles.profile_image_container}>
                                <Text>
                                    profile image
                                </Text>
                            </View>

                            <View style={styles.profile_info_left}>
                                <Text>
                                    Full Name
                                </Text>
                                <Text>
                                    Ahmad khan
                                </Text>
                                <Text>
                                    Occupation
                                </Text>
                                <Text>
                                    Web Developer
                                </Text>
                                <Text>
                                    Total Work Experience
                                </Text>
                                <Text>
                                    2 years
                                </Text>
                                <Text>
                                    Expected salary
                                </Text>
                                <Text>
                                    40000
                                </Text>
                            </View>
                        </View>
                    </View>
                </Page>
            </Document>
        </>
    );
}
const App = () => {
    const cv = {
        contact_number: "03458914711"
    }
    return (
        <>
            <BasicDocument cv_data={cv} />
            {/* <PDFDownloadLink document={<BasicDocument />} fileName="somename.pdf">
            {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
        </PDFDownloadLink> */}
        </>
    )
}
export { BasicDocument }
export default App;