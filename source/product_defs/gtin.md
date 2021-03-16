---
title: GTIN
description: Documentation about GTINs
---

A GTIN is used for uniquely identifying a product definition and is critical in Master Data. There are several different forms of a GTIN. These include:

- GTIN-14
    - *We only accept the GTIN-14. If you have a GTIN-12 or smaller, you need to pad the left with `0` until it is 14 characters long.*
- EPCIS GS1 GTIN
- EPCIS GDST / Private GTIN

# GTIN-14

A GTIN-14 is composed of 4 different parts. Those are:

- Indicator Digit
- Company Prefix
- Serial Number
- Check Sum

Before you can assign a GTIN-14 to a product definition you must make sure to register your GS1 Company Prefix in the **My Account** section. An example GS1 Company Prefix is `08600030313`.

Once you have registered your Company Prefix with your account you can start to assign a GTIN.

An example GTIN-14 using our example GS1 Company Prefix from above is `00860003031308`. When we break this down into the parts mentioned above we get:

- Indicator Digit - `0`
- Company Prefix - `08600030313`
- Serial Number - `0`
- Check Sum - `8`

## Aditional Help Links
- [Calculating the Check Sum](https://www.gs1.org/services/check-digit-calculator)
- [Additional GTIN Help Documentation](https://www.gs1.help/gtin-overview/)

# EPCIS GS1 GTIN

EPCIS uses a URN format for GTINs. An exampe of a GS1 GTIN in the EPCIS format looks like:

`urn:epc:idpat:sgtin:08600030313.00`

It is composed of the following parts:

- URN Prefix - `urn:epc:idpat:sgtin`
- Company Prefix - `08600030313`
- Indicator Digit - `0`
- Serial Number - `0`

They are put together in the following order:

`[URN Prefix]` : `[Company Prefix]` . `[Indicator Digit]` `[Serial Number]`

# EPCIS GDST / Private GTIN

EPCIS also supports using a Non-GS1 GTIN that does not require a GS1 Company Prefix. We support the GDST version of these GTINs.

It is composed of the following parts:

- URN Prefix
    - *The URN Prefix is always **urn:gdst***
- Domain
- Data Type
    - *For GTINS, the Data Type is always **product:class***
- Company Prefix
    - *Company Prefix must only be alpha-numeric characters or dashes (-)*
- Serial Number
    - *Serial Number must only be alpha-numeric characters or dashes (-)*

These identifier are generally a little bit more complicated to produce but can be useful for actors further upstream in the supply chain who may not have a GS1 Company Prefix. We support all companies getting a GS1 Company Prefix, but that may not always be possible.

The *Domain* part of the GTIN is used to indicate the system that generated the GTIN. I.E. it might be a tracaebility solution provider who generates a number of GTINs for several different companies. For our example here we are going to use the domain `foodontology.com` since we own that domain name. In your case, it is recommended to use a domain that you own.

For our *Company Prefix* we are going to use an internally generated company prefix `123`.

So our example GTIN would look like:

`urn:gdst:foodontology.com:product:class:123.0`
