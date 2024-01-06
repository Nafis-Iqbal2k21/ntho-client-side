import React, { useEffect, useState } from 'react';
import { Document, Page, View, Text, PDFDownloadLink, StyleSheet, PDFViewer, Image, Font } from '@react-pdf/renderer';
import { QRImage } from './QRImage';
import Header from './Header'
import logo from '../../assets/images/Logo/event.png'
import enfinitoLogo from '../../assets/images/Logo/enfinito.png'




// Define styles for the PDF content
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 20,
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
        textAlign: 'center',
    },
    text: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: "extrabold"
    },
    ruleText: {
        fontSize: 14,
        marginBottom: 10,
    },
    developedText: {
        fontSize: 8,
        textAlign: 'center',
    },
    photo: {
        width: 180,
        height: 200,
        marginTop: 10,
        marginBottom: 10,
        padding: 4,
        border: 2,
        borderColor: "orange"
    },
    qrCode: {
        width: 200,
        position: 'absolute',
        right: 0,
        bottom: 50,
    },
    pdfView: {
        width: 500,
        height: 1000
    },
    dataBox: {
        flexDirection: "row",
    },
    data: {
        marginTop: 10,
        marginLeft: 10
    },
    cardTitle: {
        fontSize: 20,
        textDecoration: 'underline',
        margin: 8,
        color: "orange"
    },
    rules: {
        textAlign: "left",
        margin: 10,
        position: "absolute",
        top: 420
    },
    borderBox: {
        height: 30,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'orange',
        width: '100%',
        position: "absolute",
        bottom: 0
    },
    backgroundImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: "50%",
        zIndex: -1,
        opacity: '0.3'
    },
    enfinito: {
        width: 50,
        height: 10
    }
});

Font.register({
    family: 'Open Sans',
    src: `https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0e.ttf`,
});

Font.register({
    family: 'Lato',
    src: `https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf`,
});

Font.register({
    family: 'Lato Italic',
    src: `https://fonts.gstatic.com/s/lato/v16/S6u8w4BMUTPHjxsAXC-v.ttf`,
});

Font.register({
    family: 'Lato Bold',
    src: `https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf`,
});

const PDFDownload = ({ userData, myRegistrationsData }) => {
    const generatePDF = () => {
        return (
            <Document>
                <Page size="A4" style={styles.page}>

                    <View style={styles.section}>

                        <Header />
                        <Text style={styles.cardTitle}>Online Registration Card</Text>
                        <View style={styles.dataBox}>
                            <Image src={logo} style={styles.backgroundImage} />
                            <View style={styles.data} >
                                <Text style={styles.text}>Name: {myRegistrationsData[0].name}</Text>
                                <Text style={styles.text}>Email: {myRegistrationsData[0].userEmail}</Text>
                                <Text style={styles.text}>Phone: {userData.phone}</Text>
                                <Text style={styles.text}>District: {myRegistrationsData[0].district}</Text>
                                <Text style={styles.text}>Institute: {myRegistrationsData[0].institute}</Text>
                                <Text style={styles.text}>Class: {myRegistrationsData[0].group}</Text>
                                <Text style={styles.text}>Segments:
                                    {
                                        myRegistrationsData.map(myRegistrationData => myRegistrationData.registrationStatus == "approved" ?
                                            <Text style={styles.text}>{myRegistrationData.event} </Text> : ""
                                        )
                                    }
                                </Text>
                            </View>
                        </View>
                        <View style={styles.qrCode}>
                            <QRImage url={userData.userEmail} />
                        </View>
                        <View style={styles.rules}>
                            <Text style={styles.ruleText}>1. Registration Fee is non-refundable</Text>
                            <Text style={styles.ruleText}>2. Sena Public School & College reserves the right to make any changes, modifications, additions and decisions regarding for the benefit of the carnival and is not liable in any way to any other organization or individual</Text>
                        </View>
                        <View style={styles.borderBox}><Text style={styles.developedText}>This Software Developed By </Text><Image src={enfinitoLogo} style={styles.enfinito} /></View>
                    </View>

                </Page>
            </Document>
        );
    };



    return (
        <div className='rounded-2xl text-center bg-gradient-to-tr  from-violet-700 to-indigo-800 px-4 py-2   text-white cursor-pointer text-2xl font-semibold'>
            <PDFDownloadLink document={generatePDF()} fileName="entryCard.pdf">
                {({ blob, url, loading, error }) =>
                    loading ? 'Loading document...' : 'প্রবেশপত্র ডাউনলোড করুন'
                }
            </PDFDownloadLink>
            {/* <PDFViewer>
                <Document>
                    <Page size="A4" style={styles.page}>

                        <View style={styles.section}>

                            <Header />
                            <Text style={styles.cardTitle}>Online Registration Card</Text>
                            <View style={styles.dataBox}>
                                <Image src={logo} style={styles.backgroundImage} />
                                <View style={styles.data} >
                                    <Text style={styles.text}>Name: {myRegistrationsData[0].name}</Text>
                                    <Text style={styles.text}>Email: {myRegistrationsData[0].userEmail}</Text>
                                    <Text style={styles.text}>Phone: {userData.phone}</Text>
                                    <Text style={styles.text}>District: {myRegistrationsData[0].district}</Text>
                                    <Text style={styles.text}>Institute: {myRegistrationsData[0].institute}</Text>
                                    <Text style={styles.text}>Class: {myRegistrationsData[0].group}</Text>
                                    <Text style={styles.text}>Segments:
                                        {
                                            myRegistrationsData.map(myRegistrationData => myRegistrationData.registrationStatus == "approved" ?
                                                <Text style={styles.text}>{myRegistrationData.event} </Text> : ""
                                            )
                                        }
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.qrCode}>
                                <QRImage url={userData.userEmail} />
                            </View>
                            <View style={styles.rules}>
                                <Text style={styles.ruleText}>1. Registration Fee is non-refundable</Text>
                                <Text style={styles.ruleText}>2. Sena Public School & College reserves the right to make any changes, modifications, additions and decisions regarding for the benefit of the carnival and is not liable in any way to any other organization or individual</Text>
                            </View>
                            <View style={styles.borderBox}><Text style={styles.developedText}>This Software Developed By </Text><Image src={enfinitoLogo} style={styles.enfinito} /></View>
                        </View>

                    </Page>
                </Document>
            </PDFViewer> */}
        </div>
    );
};

export default PDFDownload;
