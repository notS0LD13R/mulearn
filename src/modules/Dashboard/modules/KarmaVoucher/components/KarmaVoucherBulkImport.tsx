import React, { useState, useMemo } from "react";

import { dashboardRoutes } from "@/MuLearnServices/urls";
import BulkImport from "@/MuLearnComponents/BulkImport/BulkImport";
import { SingleButton } from "@/MuLearnComponents/MuButtons/MuButton";
import { BiArrowBack, BiDownload } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { convertToXLSX } from "../../Tasks/TaskApis";
import { CountCard } from "../../Tasks/TaskBulkImport";

const KarmaVoucherBulkImport = () => {
    const [uploadResponse, setUploadResponse] = useState<any>(null);
    const navigate = useNavigate();
    const toast = useToast();

    const successDownload = () => {
        convertToXLSX(uploadResponse.response.Success, "Success.xlsx");
    };
    const failureDownload = () => {
        convertToXLSX(uploadResponse.response.Failed, "Failed.xlsx");
    };
    const memoizedSuccessDownload = useMemo(
        () => successDownload,
        [uploadResponse]
    );
    const memoizedFailureDownload = useMemo(
        () => failureDownload,
        [uploadResponse]
    );
    return (
        <>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    alignItems: "center"
                }}
            >
                <SingleButton
                    text={"Go Back"}
                    icon={<BiArrowBack />}
                    style={{
                        display: "flex",
                        justifyContent: "start",
                        width: "100%",
                        alignItems: "center"
                    }}
                    onClick={() => {
                        navigate("/dashboard/karma-voucher");
                    }}
                />
                <SingleButton
                    text={"Download Template"}
                    icon={<BiDownload />}
                    link="
                    https://docs.google.com/spreadsheets/d/1Mn4IcK1kV5JnlUXu74eWEVxG2fD3QvAc/export?format=xlsx&id=1Mn4IcK1kV5JnlUXu74eWEVxG2fD3QvAc"
                />
            </div>
            <div>
                <BulkImport
                    path={dashboardRoutes.getKarmaVoucher + "import/"}
                    fileName="voucher_log"
                    onUpload={res => {
                        setUploadResponse(res);
                        toast({
                            title: "Success",
                            description: "CSV upload successful",
                            status: "success",
                            duration: 5000,
                            isClosable: true
                        });
                        // navigate("/dashboard/karma-voucher");
                    }}
                    onError={err => {
                        console.log(err);
                        setUploadResponse(null);
                        // navigate("/dashboard/karma-voucher");
                    }}
                />
                {uploadResponse && (
                    <>
                        <div
                            style={{
                                display: "flex",
                                width: "100%",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "10rem"
                            }}
                        >
                            <CountCard
                                title="Success"
                                count={uploadResponse.response.Success.length}
                            />
                            <CountCard
                                title="Failed"
                                count={uploadResponse.response.Failed.length}
                            />
                        </div>
                        <div
                            style={{
                                display: "flex",
                                width: "100%",
                                justifyContent: "center",
                                gap: "1rem"
                            }}
                        >
                            <SingleButton
                                text="Download Success data"
                                onClick={memoizedSuccessDownload}
                                style={{ width: "initial" }}
                            />
                            <SingleButton
                                text="Download Failed data"
                                onClick={memoizedFailureDownload}
                                style={{ width: "initial" }}
                            />
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default KarmaVoucherBulkImport;
