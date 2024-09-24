import SignInForm from '../../components/signin/SignInForm';
import './SignIn.css';


export default function SignIn() {
    return (
        <div className="page">

            <div className="page-header"></div>
            <div className="banner">
                <h1>App Invest</h1><p>©</p>
            </div>
            <main className="main-container">

                <div className="left-section">
                    
<h3 className="happy-message">Technology:
                        AAPL (Apple)
                        GOOGL (Google)
                        AMZN (Amazon)
                        MSFT (Microsoft)
                        FB (Meta Platforms)
                        NVDA (Nvidia)
                        TSLA (Tesla)
                        INTC (Intel)
                        AMD (Advanced Micro Devices)
                        IBM (International Business Machines)
                        CSCO (Cisco Systems)
                        ORCL (Oracle)
                        SAP (SAP SE)
                        ADBE (Adobe Systems)
                        CRM (Salesforce)
                        VMW (VMware)
                        QCOM (Qualcomm)
                        TXN (Texas Instruments)
                        MU (Micron Technology)
                        ASML (ASML Holding)</h3>
<h3 className="happy-message">Finance:

JPM (JPMorgan Chase)
BAC (Bank of America)
WFC (Wells Fargo)
C (Citigroup)
GS (Goldman Sachs)
UNP (Union Pacific)
CSX (CSX Corporation)
KMI (Kinder Morgan)
EOG (EOG Resources)
XOM (ExxonMobil)
CVX (Chevron)
SLB (Schlumberger)
HAL (Halliburton)
OXY (Occidental Petroleum)
BKR (Baker Hughes)
</h3>
<h3 className="happy-message">                        Healthcare:

JNJ (Johnson & Johnson)
PFE (Pfizer)
ABT (Abbott Laboratories)
UNH (UnitedHealth Group)
CVS (CVS Health)
MRK (Merck & Co.)
AZN (AstraZeneca)
NVS (Novartis)
SNY (Sanofi)
GSK (GlaxoSmithKline)
AMGN (Amgen)
ILMN (Illumina)
CELG (Celgene)
REGN (Regeneron Pharmaceuticals)
BIIB (Biogen)
</h3>
<h3 className="happy-message">                        Consumer Staples:

PG (Procter & Gamble)
KO (Coca-Cola)
PEP (PepsiCo)
WMT (Walmart)
MCD (McDonald's)
UNILEVER (Unilever)
NSRGY (Nestlé)
KHC (Kraft Heinz)
CL (Colgate-Palmolive)
PG (Procter & Gamble)
</h3>
<h3 className="happy-message">                        Consumer Discretionary:

MA (Mastercard)
V (Visa)
HD (Home Depot)
LOW (Lowe's)
NKE (Nike)
MCD (McDonald's)
SBUX (Starbucks)
TGT (Target)
GM (General Motors)
F (Ford Motor)
BA (Boeing)
LUV (Southwest Airlines)
DIS (The Walt Disney Company)
NFLX (Netflix)
AMZN (Amazon)

</h3>
<h3 className="happy-message">                        Utilities:

NEE (NextEra Energy)
DUK (Duke Energy)
AEP (American Electric Power)
SO (Southern Company)
XEL (Xcel Energy)
WEC (WEC Energy Group)
EXC (Exelon Corporation)
PG&E (Pacific Gas and Electric Company)
SCE (Southern California Edison)
SDG (San Diego Gas & Electric)
</h3>
<h3 className="happy-message">
                        Real Estate:

                        PLD (Prologis)
                        AMH (Amherst Holdings)
                        DLR (Digital Realty Trust)
                        PSA (Public Storage)
                        FRTA (First Real Estate Investment Trust)
                        VTR (Ventas, Inc.)
                        HCP (HCP, Inc.)
                        WELL (Welltower)
                        HCN (HCP, Inc.)
                        UDR (UDR, Inc.)
</h3>
<h3 className="happy-message">
                        Industrials:

                        CAT (Caterpillar)
                        UNP (Union Pacific)
                        CSX (CSX Corporation)
                        KMI (Kinder Morgan)
                        EOG (EOG Resources)
                        XOM (ExxonMobil)
                        CVX (Chevron)
                        SLB (Schlumberger)
                        HAL (Halliburton)
                        OXY (Occidental Petroleum)
                        BKR (Baker Hughes)
</h3>
<h3 className="happy-message">
                        Materials:

                        LIN (Linde)
                        DOW (Dow Inc.)
                        LYB (LyondellBasell Industries)
                        PPG (PPG Industries)
                        PPG (PPG Industries)
                        PPG (PPG Industries)
                        PPG (PPG Industries)
                        PPG (PPG Industries)
                        PPG (PPG Industries)
                        PPG (PPG Industries)
</h3>
                </div>
                <div className="right-section">
                    <div className="form">
                        <SignInForm></SignInForm>
                    </div>
                </div>
            </main>
            <div className="page-footer"></div>
        </div>
    );
}
