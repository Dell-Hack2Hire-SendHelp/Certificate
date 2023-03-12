import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer"

import PlantingCertificate from "./PlantingCertificate";
import ThankYouCertificate from "./ThankYouCertificate";



function App() {
    return <>
        <PDFViewer style={{ width: "100%", minHeight: "100vh" }}>
            <PlantingCertificate name="Soh Jun Wei" message="Hello" numberOfTrees={10} />
        </PDFViewer>

        <PDFDownloadLink document={<ThankYouCertificate />} fileName="planting-certificate.pdf">
            { ({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
        </PDFDownloadLink>
    </>
}

export default App;
