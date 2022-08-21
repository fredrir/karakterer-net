import 'styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    BarController,
    LineController
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import Layout from 'components/layout/Layout';
import { SidebarContextProvider } from 'state/sidebar';
import Sidebar from 'components/common/Sidebar';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ChartDataLabels,
    PointElement,
    LineElement,
    BarController,
    LineController
);

function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <SidebarContextProvider>
                <Layout>
                    <Component {...pageProps} />
                    <Sidebar />
                </Layout>
            </SidebarContextProvider>
        </ThemeProvider>
    );
}

export default App;
