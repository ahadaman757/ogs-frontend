-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 06, 2022 at 01:38 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ogs_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `privacypolicy`
--

CREATE TABLE `privacypolicy` (
  `id` int(11) NOT NULL,
  `content` varchar(5000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `privacypolicy`
--

INSERT INTO `privacypolicy` (`id`, `content`) VALUES
(1, '<p>Demos follows the relevant legal requirements and takes all reasonable precautions to safeguard personal information.</p><h2>INTRODUCTION</h2><p>Demos is committed to protecting your privacy and security. This policy explains how and why we use your personal data, to ensure you remain informed and in control of your information.</p><p>You can decide not to receive communications or change how we contact you at any time. If you wish to do so please contact us by emailing hello@demos.co.uk, writing to 76 Vincent Square, London, SW1 2PD or 020 3878 3955 (Lines open 9.30am – 6pm, Mon – Fri).</p><p>We will never sell your personal data, and will only ever share it with organisations we work with where necessary and if its privacy and security are guaranteed. Personal information submitted to Demos is only used to contact you regarding Demos activities.&nbsp;</p><p>Information about visitors to the Demos website domain is automatically logged for the purposes of statistical analysis. Such information includes the IP address from which you visit, referral address, and other technical information such as browser type and operating system. Your email address is not automatically logged without your knowledge.</p><p>We will not distribute, sell, trade or rent your personal information to third parties. Demos may provide aggregate statistics about our website’s users, traffic patterns and related site information to reputable third-parties such as Demos’s funding bodies or potential partners. Such statistical information will not include personally identifying information.</p><p>Questions?</p><p>Any questions you have in relation to this policy or how we use your personal data should be sent to hello@demos.co.uk for the attention of Demos’ Head of External Affairs.</p><ol><li>ABOUT US</li></ol><p>Your personal data (i.e. any information which identifies you, or which can be identified as relating to you personally) will be collected and used by Demos (charity no:1042046,&nbsp; company registration no: 2977740).</p><ol><li>THE INFORMATION WE COLLECT</li></ol><p>Personal data you provide</p><p>We collect data you provide to us. This includes information you give when joining as a member or signing up to our newsletter, placing an order or communicating with us. For example:</p><ul><li>personal details (name, job title, organisation and email) when you sign up to our newsletter and / or events.</li><li>financial information (payment information such as credit/debit card or direct debit details, when making donations or paying for a service. Please see section 8 for more information on payment security); and</li><li>details of Demos events you have attended.</li></ul><p>Sensitive personal data</p><p>We do not normally collect or store sensitive personal data (such as information relating to health, beliefs or political affiliation) about those signed up to Demos’s newsletter. However there are some situations where this will occur (e.g. if you have an accident on one of our events). If this does occur, we’ll take extra care to ensure your privacy rights are protected.</p><p>Accidents or incidents</p><p>If an accident or incident occurs on our property, at one of our events or involving one of our staff then we’ll keep a record of this (which may include personal data and sensitive personal data).</p><ol><li>HOW WE USE INFORMATION</li></ol><p>We only ever use your personal data with your consent, or where it is necessary in order to:</p><ul><li>enter into, or perform, a contract with you;</li><li>comply with a legal duty;</li><li>protect your vital interests;</li><li>for our own (or a third party’s) lawful interests, provided your rights don’t override these.</li></ul><p>In any event, we’ll only use your information for the purpose or purposes it was collected for (or else for closely related purposes).</p><p>Administration</p><p>We use personal data for administrative purposes (i.e. on our research and events programmes). This includes:</p><ul><li>maintaining databases of those signed up to our newsletter;</li><li>fulfilling orders for goods or services (whether placed online, over the phone or in person);</li><li>helping us respect your choices and preferences (e.g. if you ask not to receive marketing material, we’ll keep a record of this).</li></ul><ol><li>DISCLOSING AND SHARING DATA</li></ol><p>Your personal data – which may include your name, organisation, position, and email address are held by our mailing list provider. By signing up to our newsletter you are agreeing to the terms and conditions of MailChimp.com (<a href=\"https://mailchimp.com/legal/terms/\">http://mailchimp.com/legal/terms/</a>). This information is not shared with any other organisation. If you wish to unsubscribe from our mailing list at any time, you can do so by clicking the ‘unsubscribe’ link, found at the bottom of any email we send you – or by sending your name and email address to hello@demos.co.uk – stating ‘Unsubscribe’ in the</p>');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `privacypolicy`
--
ALTER TABLE `privacypolicy`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `privacypolicy`
--
ALTER TABLE `privacypolicy`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
