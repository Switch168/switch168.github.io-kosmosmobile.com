webpackJsonp([9,18],{869:function(e,o,t){"use strict";function i(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function n(e,o){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||"object"!=typeof o&&"function"!=typeof o?e:o}function r(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(e,o):e.__proto__=o)}function a(e){return{onChangeUsername:function(o){return e(t.i(v.changeUsername)(o.target.value))},changeRoute:function(o){return e(t.i(c.push)(o))},onSubmitForm:function(o){void 0!==o&&o.preventDefault&&o.preventDefault(),e(t.i(b.c)())},dispatch:e}}var s=t(0),u=s&&s.__esModule?function(){return s["default"]}:function(){return s};t.d(u,"a",u);var l=t(372),d=l&&l.__esModule?function(){return l["default"]}:function(){return l};t.d(d,"a",d);var c=t(148),h=c&&c.__esModule?function(){return c["default"]}:function(){return c};t.d(h,"a",h);var p=t(368),m=p&&p.__esModule?function(){return p["default"]}:function(){return p};t.d(m,"a",m);var y=t(374),f=t(913),v=t(911),b=t(876),w=t(912),g=w&&w.__esModule?function(){return w["default"]}:function(){return w};t.d(g,"a",g),t.d(o,"HomePage",function(){return P});var S=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(o,t,i,n){var r=o&&o.defaultProps,a=arguments.length-3;if(t||0===a||(t={}),t&&r)for(var s in r)void 0===t[s]&&(t[s]=r[s]);else t||(t=r||{});if(1===a)t.children=n;else if(a>1){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+3];t.children=u}return{$$typeof:e,type:o,key:void 0===i?null:""+i,ref:null,props:t,_owner:null}}}(),I=function(){function e(e,o){for(var t=0;t<o.length;t++){var i=o[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(o,t,i){return t&&e(o.prototype,t),i&&e(o,i),o}}(),A=S(g.a,{}),P=function(e){function o(){var e,t,r,a;i(this,o);for(var s=arguments.length,u=Array(s),l=0;l<s;l++)u[l]=arguments[l];return t=r=n(this,(e=Object.getPrototypeOf(o)).call.apply(e,[this].concat(u))),r.openRoute=function(e){r.props.changeRoute(e)},r.openFeaturesPage=function(){r.openRoute("/features")},a=t,n(r,a)}return r(o,e),I(o,[{key:"componentDidMount",value:function(){this.props.username&&this.props.username.trim().length>0&&this.props.onSubmitForm()}},{key:"render",value:function(){return A}}]),o}(u.a.Component),k=t.i(p.createStructuredSelector)({repos:t.i(y.b)(),username:t.i(f.a)(),loading:t.i(y.c)(),error:t.i(y.d)()});o["default"]=t.i(l.connect)(k,a)(P)},876:function(e,o,t){"use strict";function i(){return{type:a.a}}function n(e,o){return{type:a.b,repos:e,username:o}}function r(e){return{type:a.c,error:e}}var a=t(369);o.c=i,o.a=n,o.b=r},889:function(e,o,t){"use strict";t.d(o,"a",function(){return i});var i="kosmos/Rate/CHANGE_NUMBER_OR_LOCATIONa"},911:function(e,o,t){"use strict";t(889)},912:function(e,o,t){"use strict";var i=t(0),n=i&&i.__esModule?function(){return i["default"]}:function(){return i};t.d(n,"a",n);var r=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(o,t,i,n){var r=o&&o.defaultProps,a=arguments.length-3;if(t||0===a||(t={}),t&&r)for(var s in r)void 0===t[s]&&(t[s]=r[s]);else t||(t=r||{});if(1===a)t.children=n;else if(a>1){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+3];t.children=u}return{$$typeof:e,type:o,key:void 0===i?null:""+i,ref:null,props:t,_owner:null}}}(),a=r("div",{},void 0,r("a",{name:"top"}),r("h3",{},void 0,"Kosmos Privacy Policy"),r("p",{}),r("p",{},void 0,'Kosmos Mobile, ("Kosmos" or "we" or "us" or "our" or other similar pronouns) takes your privacy matters very seriously. Please read the following to learn more about our Privacy Policy ("Policy"). This Policy details how we receive, collect and use information in connection with our website located at Kosmosmobile.com (the "Site"), the Kosmos software ("Kosmos App"), and other products and services provided on the Kosmosmobile.com website (all of the foregoing, collectively, the "Service").'),r("p",{},void 0,"By visiting this Site or using the Service, you are accepting the policies and practices described in this Policy, as such Policy may be amended from time to time. Each time you visit the Site or use the Service, you agree and expressly consent to our collection, use and disclosure of the information that you provide as described in this Policy."),r("p",{},void 0,'To be clear about the terminology we are using, when we use the phrase "Personal Information" in this Policy, we mean information about you that is personally identifiable, like your name, address, e-mail address, billing information, or phone number, as well as other non-public information that is associated with this personal information. When we use the phrase "Anonymous Information" in this Policy, we mean information that is not personally identifiable, or linked to your Personal Information such as aggregated information, general demographic information and IP addresses. Anonymous Information does not necessarily enable identification of individual persons.'),r("p",{},void 0,"IF YOU ARE A USER ACCESSING THE SITE OR SERVICE FROM THE EUROPEAN UNION, ASIA, OR ANY OTHER REGION WITH LAWS OR REGULATIONS GOVERNING PERSONAL DATA COLLECTION, USE, AND DISCLOSURE THAT DIFFER FROM UNITED STATES LAWS, PLEASE BE ADVISED THAT THROUGH YOUR CONTINUED USE OF THE SITE AND SERVICE, WHICH ARE GOVERNED BY UNITED STATES LAW, THIS PRIVACY POLICY, AND OUR END USER LICENSE AGREEMENT, YOU MAY BE TRANSMITTING YOUR PERSONAL INFORMATION TO COUNTRIES (INCLUDING THE UNITED STATES) WHERE LAWS REGARDING PROCESSING PERSONAL INFORMATION MAY BE LESS STRINGENT THAN THE PROCESSING OF PERSONAL INFORMATION IN YOUR COUNTRY AND YOU HEREBY CONSENT TO SUCH TRANSMISSION OF PERSONAL INFORMATION."),r("p",{},void 0,"1. Collection and Use of Information"),r("p",{},void 0,"Kosmos App"),r("p",{},void 0,"When you install the Kosmos App, you will be asked to provide us with your phone number, name and a photo (name and photo are not mandatory) and to allow us access to your mobile device's address book."),r("p",{},void 0,"A copy of the phone numbers and names in your address book (but not emails, notes or any other Personal Information in your address book) will be stored on our servers and will only be used to:"),r("p",{},void 0,"(a) notify you when your contacts become active on Kosmos,"),r("p",{},void 0,"(b) indicate which of your contacts is already a Kosmos user,"),r("p",{},void 0,"(c) correctly display the name of each contact as it appears in your address book when a call is received."),r("p",{},void 0,"(d) sync your contacts with Kosmos running on iOS and Android devices. "),r("p",{},void 0,'The copy of your address book (names and phones) is stored on a live database. This database does not have a "historical backup". If you delete the address book from our servers, it will be deleted instantly and permanently.'),r("p",{},void 0,"Your phone number will be used for identification purposes linked to your Kosmos ID. You friends will be able to search for you on the Kosmos network via the Kosmos ID."),r("p",{},void 0,"Kosmos also maintains a Call Detail Record (CDR see http://en.wikipedia.org/wiki/Call_detail_record) for each message and call that goes through the system. These are industry standard records used by all phone companies. We maintain this information in order to better understand network behavior and trends (numbers of messages and calls made by users, typical destinations, call lengths, network type, etc.), detect potential outages and technical issues (this helps us notice things like a drop in call volume in a certain geography, a shift in call length, a change in typical networks, etc.) and for public safety reasons. All log analysis is done in an anonymous, aggregate, non-personally identifiable manner. We may look into a specific Call Detail Record in response to a customer support request. We maintain CDRs for a period of no more than 12 months."),r("p",{},void 0,"Audio calls by users are transmitted either directly from user to user or, if direct transmission is not possible (due to firewalls), Kosmos servers are used to transmit the call. In the latter scenario, the information transmitted is stored briefly in volatile memory (RAM) solely to enable the transmission of the call to the other user. WE DO NOT RECORD ANY PART OF YOUR CALL."),r("p",{},void 0,"Kosmos may interact with your phone's SMS inbox or call history for the sole purpose of service activation, placing incoming messages in your inbox, reading the contents of the activation SMS sent to you by Digits for Kosmos. WE WILL NOT ACCESS THE CONTENTS OF ANY OTHER SMS."),r("p",{},void 0,"Name and Photo"),r("p",{},void 0,"Should you provide your name and/or photo it will be visible to other Kosmos users as long as:"),r("p",{},void 0,"1. Such users have your Kosmos ID"),r("p",{},void 0,"Kosmos Out"),r("p",{},void 0,'If you wish to use Kosmos to call a number outside of the Kosmos network ("Kosmos Out"), you will be asked to create a "User Account" by selecting a password, and providing your name and billing information so that your payment for the Kosmos Out Service can be processed. We use the services of third parties to process your payments and we require that these third parties take the appropriate organizational and technical measures to protect your personal data and traffic data and to comply with relevant laws. Please review the terms of use and privacy policies of those third parties before providing your banking or payment information.'),r("p",{},void 0,"Other Services"),r("p",{},void 0,'In the event we make message boards and forums available to you (collectively, "Forums"), you will be solely responsible for the information and any other content you post on and through these Forums and should be aware that when you voluntarily disclose Personal Information (e.g., name, e-mail address, telephone number) on or through these Forums, such information is generally accessible to, and may be collected and used by, other users. This may result in unsolicited messages from third parties, and such messages are beyond our control. We do not exercise control over any users or Site visitors, and in no way are we responsible, nor do we have any liability whatsoever, for any collection or use of information you may disclose through the Forums. This Policy does not cover such disclosure of information. You are encouraged to exercise discretion when providing personal information about yourself in and through Forums. Please do not post any Personal Information on this Site that you expect to keep private.'),r("p",{},void 0,"Cookies, Clear GIFs and Other Automatically Collected Data"),r("p",{},void 0,"If you have permitted your computer to accept cookies, we may use cookies on the Site. Cookies are pieces of information that a website transfers to an individual's hard drive for record-keeping purposes. Cookies make web-surfing easier by saving preferences and browsing patterns while you are at the Site. Cookies may be used to analyze the Site usage, improve content, customize the Site's content and layout and for other customer service purposes. A cookie may enable us to relate your use of our Site to other information about you, including your Personal Information. All of these purposes serve to improve and personalize your experience on our Site. Most Web browsers can be set to inform you when a cookie has been sent to you and provide you with the opportunity to refuse that cookie. Additionally, if you have a Flash player installed on your computer, your Flash player can be set to reject or delete Flash cookies. However, refusing a cookie may, in some cases, preclude you from using, or negatively impact the display or function of, the Site or certain areas or features of the Site."),r("p",{},void 0,'We may use "clear GIFs" (aka "Web beacons" or "pixel tags") or similar technologies, in the Site and/or in our communications with you to enable us to evaluate Site usage information about visitors to the Site, target campaigns, upgrade visitor information, and know whether you have visited a Web page or received a message. A clear GIF is typically a one-pixel, transparent image (although it can be a visible image as well), located on a Web page or in an e-mail or other type of message, which is retrieved from a remote site on the Internet enabling the verification of an individual\'s viewing or receipt of a Web page or message. A clear gif may enable us to relate your viewing or receipt of a Web page or message to other information about you, including your Personal Information.'),r("p",{},void 0,"Our servers may automatically collect data about your Internet address when you visit the Site. This information, known as an Internet Protocol address, or IP Address, is a number that is automatically assigned to your computer by your Internet service provider whenever you are on the Internet. When you request pages from our Site, our servers may log your IP Address and, if applicable, your domain name. Your IP Address is used to help identify you and to gather demographic information about our members and users as a whole, but does not include personally identifiable information. Our server may also record the referring page that linked you to us (e.g., another web site or a search engine); the pages you visit on this Site; the web site you visit after this Site; the ads you see and/or click on; other information about the type of Web browser, computer, platform, related software and settings you are using; any search terms you have entered on this Site or a referral site; and other Web usage activity and data logged by our servers. We use this information for internal system administration, to help diagnose problems with our servers, and to administer our Service. Such information may also be used to gather demographic information, such as country of origin and Internet Service Provider."),r("p",{},void 0,"We will not link any Personal Information, including e-mail addresses, with aggregate data of our users."),r("p",{},void 0,"Any or all of these activities with regard to Site usage information may be performed on our behalf by our service providers, including, for example, our analytics vendor(s) and our e-mail management partner(s)."),r("p",{},void 0,"Third-Party Sites and Privacy Practices"),r("p",{},void 0,"You may arrive at our Site and/or download the Kosmos App from another website. In addition, our Site may contain links that will let you leave our Site and access another website. Websites linked to or from our Site are not under the control of Kosmos and it is possible that these websites have a different privacy policy. Our Policy applies solely to Personal Information that is acquired on the Site or through your use of our Service, and/or your relationship with Kosmos. We urge you to be careful when you enter any Personal Information online. We accept no responsibility or liability for these other websites."),r("p",{},void 0,"Analytics Collection"),r("p",{},void 0,"Kosmos uses Google Analytics to help us anonymously track and report user/visitor behavior information and users' standard log information to the Site and the Kosmos App. This information (including but not limited to: IP address, data storage, maintenance services, database management, web analytics and information processing) helps us analyze and evaluate how the Kosmos App and Site are used as part of our ongoing efforts to improve the Site and Kosmos App's features and services. No personally identifying data is included in this type of reporting. Google Analytics may have access to your information only for the purposes of performing these tasks and on behalf of Kosmos and under obligation similar in those in this Privacy Policy. For more information about the terms that govern Google Analytics, please visit the Google Analytics terms of service. "),r("p",{},void 0,"We will never (and will not allow any third party to) use the statistical analytics tool to track or to collect any Personal Information of visitors or users. Google will not associate your IP address with any other data held by Google. Neither we nor Google will link, or seek to link, an IP address with the identity of a device user. We will not associate any data gathered from this site with any Personally Identifiable Information from any source. "),r("p",{},void 0,"2. Sharing and Disclosure of Information"),r("p",{},void 0,"We do not rent, sell, or share any information about our users with any third-parties, except as specifically described herein. We may disclose your Personal Information if we believe such action is necessary to:"),r("p",{},void 0,"(a) comply with the law, or legal process served on us;"),r("p",{},void 0,"(b) protect and defend our rights or property (including the enforcement of our agreements); or"),r("p",{},void 0,"(c) act in urgent circumstances to protect the personal safety of users of our Service or members of the public."),r("p",{},void 0,"In order to provide you with Kosmos products you have requested, Komos may sometimes, if necessary, share your Personal Information (excluding your address book and related information) and traffic data with trusted partner service providers and/or agents, for example: providers of payment and analytical services, customer support, or hosting services. Kosmos will always require these third parties to take appropriate organizational and technical measures to protect your personal data and traffic data and to observe the relevant legislation. Kosmos will never share your address book information with any third party, except as may be required by law (see below)."),r("p",{},void 0,"The following is a description of how we may share your Personal Information with trusted third party partners. Should we add additional partners, we will immediately update this description:"),r("p",{},void 0,"1. We use third party companies in order to send you an authentication SMS when you register with Kosmos. In order to send you the SMS, we send one of these third party companies your phone number and the authentication message. These third parties are contractually obligated to only use your phone number for the transmission of the authentication SMS."),r("p",{},void 0,'2. If we fail to send you an SMS (this happens in certain cases) you may ask us to call you and read you the authentication code on the phone. This is done using a third party automated phone system. In order to call you, we provide this third party partner with your phone number and send the "audio content" of the call to them. The third party partner in turn will typically use another phone provider who may use another phone provider and so on until the call reaches you. This is an industry standard mechanism for the transmission of phone calls. The third party partner is contractually obligated to only use your phone number for the completion of the authentication phone call.'),r("p",{},void 0,"3. We may use Push Notification Services to notify you about various events related to the app. If we do, the phone number or the name of the person calling you or sending you a message may be part of the notification. This message is sent to the push notification service provider, for delivery to your device."),r("p",{},void 0,"4. We use third parties to process the payment and/or billing information that you submit on our Site or through the Kosmos App to facilitate payment transactions. We require that these third parties take the appropriate organizational and technical measures to protect your personal data and traffic data and to comply with relevant laws, but we are not liable or responsible for these third party transactions. Therefore, you should review such third party terms and conditions before providing your payment or billing information."),r("p",{},void 0,"We may disclose information about you if we determine that for national security, law enforcement, or other issues of public importance that disclosure of information is necessary."),r("p",{},void 0,"We may from time to time ask you to provide information about your experiences, which will be used to measure and improve quality. You are at no time under any obligation to provide any of such data. Any and all information which is voluntarily submitted in feedback forms on the Site or any survey that you accept to take part in is used for the purposes of reviewing this feedback and improving the Kosmos software, products and websites."),r("p",{},void 0,"We may contact you to send you messages about faults and service issues. Furthermore, we reserve the right to use email, the Kosmos software or SMS to notify you of any eventual claims related to your use of our software, websites and/or products, including without limitation claims of violation of third party rights."),r("p",{},void 0,"We may send you alerts via the Kosmos software to notify you when someone has tried to contact you. We may also use the Kosmos software to keep you up to date with news about our software and products that you have purchased and/or to inform you about other Kosmos products and related information."),r("p",{},void 0,"3. Children's Privacy"),r("p",{},void 0,"Kosmos websites and software clients are not intended for or designed to attract anyone under the age of 13 and we do not intentionally or knowingly collect Personal Information on our sites from anyone under the age of 13 (or older in some jurisdictions). We encourage parents to be involved in the online activities of their children to ensure that no information is collected from a child without parental permission."),r("a",{href:"#top"},void 0,"Back to top of page"),r("p",{},void 0,"4. Security"),r("p",{},void 0,"We take reasonable precaution to protect Personal Information from misuse, loss and unauthorized access. Although we cannot guarantee that Personal Information will not be subject to unauthorized access, we have physical, electronic, and procedural safeguards in place to protect Personal Information. Personal Information is stored on our servers and protected by secured networks to which access is limited to a few authorized employees and personnel. However, no method of transmission over the Internet, or method of electronic storage, is 100% secure."),r("a",{href:"#top"},void 0,"Back to top of page"),r("p",{},void 0,"5. Business Transitions"),r("p",{},void 0,"In the event that we go through a business transition, such as a merger, acquisition by another company, or sale of all or a portion of our assets, Personal Information will likely be among the assets transferred. As part of such a transaction the new entity will be required to commit to the same level of protection of your Personal Information as described in this Privacy Policy. If we cannot obtain such a commitment, we will not perform the business transition."),r("p",{},void 0,"We will post a notice on this Site of any such change in ownership or control of the Personal Information we may have prior to such transfer."),r("a",{href:"#top"},void 0,"Back to top of page"),r("p",{},void 0,"6. Changes to Policy"),r("p",{},void 0,"From time to time, we may revise this Policy. We reserve the right to update or modify this Policy, or any other of our policies or practices, at any time with or without notice. However, we will not use your Personal Information in a way that is materially different than the uses described in this Policy without giving you an opportunity to opt-out of such differing uses. We will post the revised Policy on the Site, so that users can always be aware of what information we collect, how the information is used and under what circumstances such information may be disclosed. You agree to review the Policy periodically so that you are aware of any modifications. Your continued use of the Site indicates your assent to any changes and signifies your agreement to the terms of our Policy. If you do not agree with these terms, you should not use the Site, the Kosmos App, or any other Service."),r("a",{href:"#top"},void 0,"Back to top of page"),r("p",{},void 0,"7. Change or Removal of Information"),r("p",{},void 0,"If you provided your e-mail address to us and wish to update it, you may do so by sending an e-mail to support@kosmosmobile.com."),r("p",{},void 0,"If you no longer wish to receive e-mail communication from us, such as offers, updates and newsletters, you may opt-out of receiving such communications by following the instructions included in each newsletter or communication. In addition, you can remove your e-mail address at any time by sending an e-mail with the subject line of UNSUBSCRIBE to unsubscribe@kosmosmobile.com."),r("p",{},void 0,"Due to technological reasons, we do not know when and if you delete the application. Therefore, if we detect no activity from your device for 90 days, we will assume that you deleted the application and we will remove your address book from our servers. However, since we are not certain that you deleted the application (you may just be on vacation, etc.) we will not deactivate your Kosmos account (which is your phone number and device ID). We do not want to force you to register again in the event of non-use."),r("p",{},void 0,'If you wish to delete your account completely, you can go to the "Account" tab in the Kosmos App, and tap the "Delete Account" option. Please note that this will remove your data from Kosmos, and deactivate Kosmos on your device. If you have additional concerns and/or requests, you can contact Kosmos at support@kosmosmobile.com'),r("p",{},void 0,"8. Contact Information"),r("p",{},void 0,"Please direct all questions in connection with this Policy via e-mail to privacy@kosmosmobile.com."),r("p",{}));e.exports=function(){return a}},913:function(e,o,t){"use strict";var i=t(368),n=i&&i.__esModule?function(){return i["default"]}:function(){return i};t.d(n,"a",n),t.d(o,"a",function(){return a});var r=function(){return function(e){return e.get("home")}},a=function(){return t.i(i.createSelector)(r(),function(e){return e.get("username")})}}});