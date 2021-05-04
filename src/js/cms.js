import React from "react";
import CMS from "netlify-cms-app";

// Import main site styles as a string to inject into the CMS preview pane
import styles from "!to-string-loader!css-loader!postcss-loader!sass-loader!../css/main.css";

import ArtworkPreview from "./cms-preview-templates/artwork";
import AboutUsPreview from "./cms-preview-templates/about-us";
import ProgramsPreview from "./cms-preview-templates/programs";
import EventsPreview from "./cms-preview-templates/events";
import ServicesPreview from "./cms-preview-templates/services";
import GetInvolvedPreview from "./cms-preview-templates/get-involved";

CMS.registerPreviewStyle(styles, { raw: true });

CMS.registerPreviewTemplate("artwork", ArtworkPreview);
CMS.registerPreviewTemplate("about_us", AboutUsPreview);
CMS.registerPreviewTemplate("programs", ProgramsPreview);
CMS.registerPreviewTemplate("events", EventsPreview);
CMS.registerPreviewTemplate("services", ServicesPreview);
CMS.registerPreviewTemplate("get_involved", GetInvolvedPreview);

CMS.init();
