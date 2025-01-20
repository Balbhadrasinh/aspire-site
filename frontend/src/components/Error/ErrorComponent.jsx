import React from 'react';
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Images from '../Shared/Image';
import Links from '../Shared/Links';

const ErrorComponent = ({ errorComponentData }) => {
    return (
        <div className='container py-16 h-[100vh] xl:px-36 mx-auto px-4'>
            <div className="container text-center">
                <div className="pt-40">
                    <Images src="/uploads/error404.png" width={750} height={450}/>
                    {errorComponentData?.image?.data?.attributes?.url !=
                        undefined && (
                            <Images
                            src={errorComponentData?.image?.data?.attributes?.url}
                                width={
                                    errorComponentData?.image?.data?.attributes?.width
                                }
                                height={
                                    errorComponentData?.image?.data?.attributes?.height
                                }
                                alt={
                                    errorComponentData?.image?.data?.attributes?.alternativeText
                                }
                            />
                        )}
                </div>
            </div>
            <div className="mx-auto py-10 px-4  text-center">
                <h1>
                    {errorComponentData?.title || "Page Not Found"}
                </h1>
                <div>
                      <h5 className="mt-4 thank-you-description">
                        { errorComponentData?.description || "Oops! It seems like the page you were trying to find isn't around anymore (or at least isn't here). " }
                      </h5>
                    </div>
                    <div className='Error'>
                    <button
                            className="btn-primary bg-[#FF980B] text-white group mt-10 mx-auto"
                        >
                            <Links
                                className={""}
                                href={"/"}
                                label={"Back To Home"}
                            />
                        </button>  
                    </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default ErrorComponent