<template>

  <div class="container join-container">
    <h2 class="p-3">회원가입</h2>
    <div class="join-template">
      <!--<label for="input-id" class="form-label">Your vanity URL</label>-->
      <div class="input-group mb-4 input-join">
        <label class="input-group-text">아이디 <span class="highlight-red">&nbsp;*</span></label>
        <input id="input-id" aria-describedby="button-addon2" aria-label="Recipient's username" class="form-control"
               placeholder="ID를 입력해주세요."
               type="text">
        <button class="btn btn-outline-secondary" type="button">중복 확인</button>
      </div>
      <div class="input-group mb-3 input-join">
        <label class="input-group-text">비밀번호 <span class="highlight-red">&nbsp;*</span></label>
        <input aria-describedby="button-addon2" aria-label="Recipient's username" class="form-control"
               placeholder="비밀번호를 입력해주세요."
               type="text">
      </div>
      <div class="input-group mb-3 input-join">
        <label class="input-group-text text-wrap">비밀번호 확인<span class="highlight-red">&nbsp;*</span></label>
        <input aria-describedby="button-addon2" aria-label="Recipient's username" class="form-control"
               placeholder="비밀번호를 재입력해주세요."
               type="text">
      </div>
      <div class="input-group mb-3 input-join">
        <label class="input-group-text">이름<span class="highlight-red">&nbsp;*</span></label>
        <input aria-describedby="button-addon2" aria-label="Recipient's username" class="form-control"
               placeholder="이름을 입력해주세요."
               type="text">
      </div>

      <!-- 성별 라디오 -->
      <div class="radio-gender row input-join mb-3">
        <div class="col-auto"><div class="d-inline-flex p-2">성별<span class="highlight-red">&nbsp;*</span></div></div>
        <div class="col-auto">
          <input id="checkMale" autocomplete="off" checked class="btn-check" name="options-base" type="radio">
          <label class="btn btn-outline-primary" for="checkMale" style="margin-right: 10px">남</label>
          <input id="checkFemale" autocomplete="off" class="btn-check" name="options-base" type="radio">
          <label class="btn btn-outline-danger" for="checkFemale">여</label>
        </div>
      </div>
       <div class="input-group mb-3 input-birthday">
        <label class="input-group-text">생년월일<span class="highlight-red">&nbsp;*</span></label>
        <input aria-describedby="button-addon2" aria-label="Recipient's username" class="form-control"
               placeholder="이름을 입력해주세요."
               type="date">
      </div>
      <div class="input-group mb-3">
        <label class="input-group-text">휴대폰 번호<span class="highlight-red">&nbsp;*</span></label>
        <input aria-describedby="button-addon2" aria-label="Recipient's username" class="form-control"
               placeholder="휴대폰 번호를 입력해주세요."
               type="text">
      </div>
       <div class="input-group mb-3">
        <label class="input-group-text">이메일 주소<span class="highlight-red">&nbsp;*</span></label>
        <input aria-describedby="button-addon2" aria-label="Recipient's username" class="form-control"
               placeholder="이메일 주소를 입력해주세요."
               type="text">
      </div>
      <div class="input-group mb-3 input-postcode">
        <label class="input-group-text">우편번호<span class="highlight-red">&nbsp;*</span></label>
        <input aria-describedby="button-addon2" aria-label="Recipient's username" class="form-control"
               placeholder="우편번호"
               type="text" v-model="postcode" readonly>
        <button @click="searchAddress" class="btn btn-outline-secondary" type="button">검색</button>
      </div>
      <div class="input-group mb-3">
        <label class="input-group-text">주소<span class="highlight-red">&nbsp;*</span></label>
        <input aria-describedby="button-addon2" aria-label="Recipient's username" class="form-control"
               id="address" placeholder="주소를 입력해주세요."
               type="text" v-model = "address" readonly>
      </div>
      <div class="input-group mb-3">
        <label class="input-group-text">상세 주소<span class="highlight-red">&nbsp;*</span></label>
        <input aria-describedby="button-addon2" aria-label="Recipient's username" class="form-control"
               placeholder="상세 주소를 입력해주세요."
               type="text">
      </div>
       <button type="submit" class="btn btn-primary">가입하기</button>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Join',
  data() {
    return {
      postcode: "",
      address: "",
      extraAddress: "",
    }
  },
  methods : {
    searchAddress() {
       new window.daum.Postcode({
         oncomplete: (data) => {
          if (this.extraAddress !== "") {
            this.extraAddress = "";
          }
          if (data.userSelectedType === "R") {
            // 사용자가 도로명 주소를 선택했을 경우
            this.address = data.roadAddress;
          } else {
            // 사용자가 지번 주소를 선택했을 경우(J)
            this.address = data.jibunAddress;
          }

          // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
          if (data.userSelectedType === "R") {
            // 법정동명이 있을 경우 추가한다. (법정리는 제외)
            // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
            if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
              this.extraAddress += data.bname;
            }
            // 건물명이 있고, 공동주택일 경우 추가한다.
            if (data.buildingName !== "" && data.apartment === "Y") {
              this.extraAddress +=
                this.extraAddress !== ""
                  ? `, ${data.buildingName}`
                  : data.buildingName;
            }
            // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
            if (this.extraAddress !== "") {
              this.extraAddress = `(${this.extraAddress})`;
            }
          } else {
            this.extraAddress = "";
          }
          // 우편번호를 입력한다.
          this.postcode = data.zonecode;
        },
      }).open();
    }
  },
  mounted() {
    console.log('this > ', this);
  },
  updated() {
    console.log('뭐냐고')
  }
}
</script>

<style>
.join-container {
  width: 80%;
}
.input-join {
  width: 100%;
}
.highlight-red {
  color: red;
}
.join-template {
  margin-top: 30px;
  margin-bottom: 30px;
}

.input-birthday {
  width: 80%;
}

.input-postcode {
  width: 80%;
}

</style>