package com.amigoscode.s3;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.s3.S3Client;

@Configuration
public class S3Config {
    // inject values from the application’s properties file into the awsRegion and
    // mock fields
    @Value("${aws.region}")
    private String awsRegion;

    @Value("${aws.s3.mock}")
    private boolean mock;

    // Returns an object that should be registered as a bean in the Spring
    // application context.
    // The returned object is an instance of S3Client, which is used to interact
    // with Amazon S3.
    // If mock is true, it returns a new instance of FakeS3.
    // Otherwise, it builds and returns a new S3Client instance, configured with the
    // AWS region specified in awsRegion.
    @Bean
    public S3Client s3Client() {
        if (mock) {
            return new FakeS3();
        }
        return S3Client.builder()
                .region(Region.of(awsRegion))
                .build();
    }

}
